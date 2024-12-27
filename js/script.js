import { validateEamil } from "./modules/validate.js";
import { emailExamples } from "./modules/data.js";

//function :validate email
/*function validateEamil(email){
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}*/
//console.log("test");

//dom elements
const form=document.getElementById('emailForm');
const emailInput=document.getElementById('emailInput');
const message=document.getElementById('message');

//event listner
form.addEventListener('submit',(e) =>{
    e.preventDefault();//prevent form submission

    //get the email entered
    const email=emailInput.value.trim();
    //console.log("testing");

    //validate the email
    if(validateEamil(email)){
        message.textContent=`✅"${email}" is a valid email address`;
        message.style.color='green';
    }else{
        message.textContent=`❌"${email}" is not a valid email address.`;
        message.style.color='red';
    }
    //console.log("test2");

});