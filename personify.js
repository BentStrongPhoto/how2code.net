let background = document.querySelector("#background")

let redButton = document.querySelector("#red-switch")

let orangeButton = document.querySelector("#orange-switch")

let yellowButton = document.querySelector("#yellow-switch")

redButton.addEventListener("click", ()=>{
  background.classList.remove("orange")
   background.classList.remove("yellow")
  background.classList.add("red") 
})




orangeButton.addEventListener("click", ()=>{
  background.classList.remove("red")
   background.classList.remove("yellow")
  background.classList.add("orange")                           
})





yellowButton.addEventListener("click", ()=>{
  background.classList.remove("red")
   background.classList.remove("orange")
  background.classList.add("yellow")                             
})