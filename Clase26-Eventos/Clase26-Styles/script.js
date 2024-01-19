const title = document.getElementById("title")
const color = document.querySelector("[type=color]");
const range = document.querySelector("[type=range]")

color.addEventListener("change" ,(e) =>{
title.style.color = e.target.value
})

range.addEventListener("change", (e) => {
  title.style.fontSize = e.target.value+ "px"
})

