var form = document.querySelector(".hero form")
var input = document.querySelector("#cat-name")
var headerText = document.querySelector(".hero h1 strong")

form.addEventListener("submit", displayCatName);

function displayCatName(event) {
 event.preventDefault(); 
 var catName = input.value;
 headerText.innerText = catName;
}