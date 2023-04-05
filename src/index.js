console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
window.addEventListener('load', () => {
    fetch(imgUrl)
      .then(response => response.json())/*  In the example solution I 
      provided earlier, the response.json() method is used to parse the 
      response from the API as JSON. This method returns a promise that 
      resolves with the result of parsing the response body text as JSON.
       Once the promise is resolved, we can access the data as a 
       JavaScript object and use it in our code.*/

      .then(data => {
        const imagesContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imagesContainer.appendChild(img);
        });
      });
  });
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  window.addEventListener('load', () => {
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const ul = document.querySelector('ul');
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          ul.appendChild(li);


        });
      });
  });
let breeds = [];

window.addEventListener('load', () => {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breeds = Object.keys(data.message);
      renderBreeds(breeds);
    });
});
const renderBreeds = (breeds) => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  breeds.forEach(breed => {
    const li = document.createElement('li');
    li.textContent = breed;
    ul.appendChild(li);
  });
}

const dropdown = document.querySelector('#breed-dropdown');
dropdown.addEventListener('change', (event) => {
  const selectedLetter = event.target.value;
  const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
  renderBreeds(filteredBreeds);
});