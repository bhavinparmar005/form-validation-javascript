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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputData = {
    first_name: document.getElementById("first_name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("mobile_number").value,
    password: document.getElementById("password").value,
    conform_password: document.getElementById("conform_password").value,
  };

  cheackConditions(inputData);
});

function cheackConditions(inputData) {
  // conditions for first name

  if (!/^[A-Za-z\s]{2,}$/.test(inputData.first_name)) {
    first_name_error.append("First name can only contain letters");
  }
  // conditions for email
  if (!/^\S+@\S+\.\S+$/.test(inputData.email)) {
    email_error.append("Please enter a valid email address.");
  }
  // conditions for mobile number
  if (!/^\d{10}$/.test(inputData.number)) {
    mobile_number_error.append("Please enter a valid 10-digit mobile number.");
  }

  // conditions for password

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(
      inputData.password
    )
  ) {
    password_error.append(
      "Please use 8 charcter password with one Uppercase and one lowercase and one digit"
    );
  }
  // conditions for conform password

  if (inputData.password !== inputData.conform_password) {
    conform_password_error.append(
      "Input password and confrim password do not match"
    );
  }
}
