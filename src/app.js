function submitHandler(event){
event.preventDefault()
let city = document.querySelector("h1");
city.innerHTML=searchInput.value

}

let searchInput = document.querySelector("#search");
let form=document.querySelector("#form")
form.addEventListener("submit", submitHandler)