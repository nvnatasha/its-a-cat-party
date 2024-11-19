var form = document.querySelector(".hero form")
var input = document.querySelector("#cat-name")
var headerText = document.querySelector(".hero h1 strong")
const emmaline = document.querySelector(".emmaline")
const emmyButton = document.querySelector(".emmaline-button")
const heroForm = document.querySelector(".hero")
const emmyForm = document.querySelector(".emmaline form")
const yesButton = document.querySelector(".yes-button")
const emmyHeader = document.querySelector(".emmaline h1")


form.addEventListener("submit", displayCatName);


function displayCatName(event) {
    event.preventDefault(); 
    var catName = input.value;
    headerText.innerText = catName;
}

function displayEmmy() {
    heroForm.classList.add('hidden')
    emmaline.classList.remove('hidden')
}

emmyButton.addEventListener("click", displayEmmy)
yesButton.addEventListener("click", function(event){
    event.preventDefault()
    displayEmmy()
    displayEmmyName()
})

function displayEmmyName() {
    emmyHeader.innerText = "Meet Emmaline"
    heroForm.classList.add('hidden')
    emmyForm.classList.remove('hidden')
}

