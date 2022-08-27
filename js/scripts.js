const doc= document.querySelector('body');
let emailInput= document.querySelector('#email');
const errorPopUp= document.querySelector('.error_message');
const getStart= document.querySelector('.start_free');

doc.addEventListener('click', testo);

function testo(e){
  console.log(e.target);
}

getStart.addEventListener('click', validateFormatEmail);


function validateFormatEmail(emailInput){

  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if(regx.test(emailInput)){
    console.log(e.target)
    return true;
  }
  else{

    errorPopUp.style.setProperty("--error-message", "visible")
    setTimeout(removeErrorMessage, 3000);
  }

}

function removeErrorMessage(){
  errorPopUp.style.setProperty("--error-message", "hidden")
}