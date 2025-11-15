var chatForm = document.getElementById("chatform")
var message = document.getElementById("inputmessage");
var chatText = document.getElementById("text")
var messageOutput = document.getElementById("outputmessage")

chatForm.addEventListener("sendbutton", (e) => {
  e.preventDefault();

  
  

  if (message.value == "") {
    alert("Ensure you send a message!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    
    messageOutput.innerHTML = message.value
    
    

    message.value = "";
    
  }
});





    

console.log(message)
console.log(messageOutput)