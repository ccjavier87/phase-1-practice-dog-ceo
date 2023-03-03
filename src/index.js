console.log('%c HI', 'color: firebrick')

// allow content to load before executing following lines
window.addEventListener('DOMContentLoaded', () => {

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

//on page load, fetches the images using the url above ⬆
fetch(imgUrl)
    .then((response) => response.json())    //parses the response as JSON//
    .then((dogUrls) => appendDogPics(dogUrls.message))

function appendDogPics(dogImgs) {
    //console.log(dogImgs)
    const imgCont = document.querySelector('#dog-image-container')

    dogImgs.forEach(picUrl => {
        //make element for images
        const img = document.createElement('img')
        img.src = picUrl
        //adds image elements to the DOM for each 🤔 image in the array
        imgCont.appendChild(img)
    })
}

fetch(breedUrl)
    .then((response) => response.json())
    //.then((e) => console.log(e))
    .then((dogBreedData) => {
        breedS = Object.keys(dogBreedData.message);
        appendDogBreeds(breedS)
    })
    
const dogUl = document.querySelector("#dog-breeds")

//adds the breeds to the page in the <ul> provided in index.html
function appendDogBreeds(breedS) {
    //console.log(breedS)
    //console.log (dogUl)

    for (let breed of breedS) {
        const li = document.createElement('li')
        li.textContent = breed;
        //add event liener to list
        li.addEventListener("click", (event) => {
//when the user clicks on any one of the <li>s, the font color of that <li> changes.            
            event.target.style.color = "blue" 
            //debugger;
        });
        dogUl.appendChild(li);
    }

}

//select dropdown
    const drop = document.querySelector("select");
    drop.addEventListener("change", filterBreeds) 

    function filterBreeds(event) {
        let filterLetter = event.target.value
        //console.log(breedS)
        let breedFilter = breedS.filter((breed) => {
            return breed[0] === filterLetter;
        });
        //console.log(breedFilter)
        dogUl.innerHTML = ""
        appendDogBreeds(breedFilter)
    }
})

