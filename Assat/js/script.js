//target to form
let form = document.getElementById("registration_form");

//target first name Error
let first_name_error = document.getElementById("error_massage_form_first_name");

//target to email Error
let email_error = document.getElementById("error_massage_form_email");

//target to mobile number Error
let mobile_number_error = document.getElementById(
  "error_massage_form_mobile_number"
);

//target to password Error
let password_error = document.getElementById("error_massage_form_password");

//target to conform password Error
let conform_password_error = document.getElementById(
  "error_massage_form_conform_password"
);

form.addEventListener('submit',(e)=>{

e.preventDefault(); 

     let data={
      first_name:document.getElementById("first_name").value ,
      email:document.getElementById("email").value ,
      number:document.getElementById("mobile_number").value,
      password:document.getElementById("password").value ,
      conform_password:document.getElementById("conform_password").value ,
     }


     
});