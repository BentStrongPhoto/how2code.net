let background = document.querySelector("#background")

let redButton = document.querySelector("#red-switch")

let orangeButton = document.querySelector("#orange-switch")

let yellowButton = document.querySelector("#yellow-switch")

redButton.addEventListener("click", ()=>{
  body.classList.remove("orange")
   body.classList.remove("yellow")
  body.classList.add("red") 
})




orangeButton.addEventListener("click", ()=>{
  body.classList.remove("red")
   body.classList.remove("yellow")
  body.classList.add("orange")                           
})





yellowButton.addEventListener("click", ()=>{
  body.classList.remove("red")
   body.classList.remove("orange")
  body.classList.add("yellow")                             
})