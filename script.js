var now = new Date()

var hour = now.getHours()

var goodHour = (hour % 12) || 12

var minutes = now.getMinutes()

day = now.getDay()

console.log(day)

var loggedIn

var days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var dayOfTheWk = document.querySelector("#d")
var timeOfTheDay = document.querySelector("#t")
var userName = document.querySelector("#user")

dayOfTheWk.innerHTML = days[day]

if(minutes > 9){
  timeOfTheDay.innerHTML = goodHour + ":" + minutes
}
else{
  timeOfTheDay.innerHTML = goodHour + ":0" + minutes
}

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  
  
  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    
    if(username.value == "BentsPhoto" && password.value == "Pumpkin_3.1415%" || username.value == "FastMightyData" && password.value == "fastering"){
      alert("You have logged in!")
      loggedIn = true
      userName.innerHTML = username.value + "!"
    }
    else{
      alert("These inputs are not valid.")
    }
    
   

    username.value = "";
    password.value = "";
  }
});



loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let message = document.getElementById("inputMessage");
  let chatText = document.getElementById("text")

  if (message.value == "") {
    alert("Ensure you send a message!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    
    chatText.innerHTML = message.value 
    
    

    message.value = "";
    
  }
});

let chatForm = document.getElementById("chatForm");

let messageOutput = document.getElementById("outputMessage")

let messageInput = document.getElementById("inputMessage")

chatForm.addEventListener("submit", (d) => {
  d.preventDefault();
  
  if (messageInput.value == "HI"){
    alert("Ensure you send an important message!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    
    messageOutput.innerHTML = username.value + ":" +  messageInput.value
    
    

    messageInput.value = "";
    
  }
});    

console.log(messageInput)
console.log(messageOutput)