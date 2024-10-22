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

document.getElementById("first_name").addEventListener("focus", () => {
  first_name_error.textContent = "";
});

document.getElementById("email").addEventListener("focus", () => {
  email_error.innerHTML = "";
});

document.getElementById("mobile_number").addEventListener("focus", () => {
  mobile_number_error.innerHTML = "";
});

document.getElementById("password").addEventListener("focus", () => {
  password_error.innerHTML = "";
});

document.getElementById("conform_password").addEventListener("focus", () => {
  conform_password_error.innerHTML = "";
});
// old code

// form.addEventListener("submit", (e) => {
//   // e.preventDefault();

//   let inputData = {
//     first_name: document.getElementById("first_name").value,
//     email: document.getElementById("email").value,
//     number: document.getElementById("mobile_number").value,
//     password: document.getElementById("password").value,
//     conform_password: document.getElementById("conform_password").value,
//   };

//   cheackConditions(inputData);
// });

// function cheackConditions(inputData) {
//   // conditions for first name

//   if (!/^[A-Za-z\s]{2,}$/.test(inputData.first_name)) {
//     first_name_error.append("First name can only contain letters");
//   }
//   // conditions for email
//   if (!/^\S+@\S+\.\S+$/.test(inputData.email)) {
//     email_error.append("Please enter a valid email address.");
//   }
//   // conditions for mobile number
//   if (!/^\d{10}$/.test(inputData.number)) {
//     mobile_number_error.append("Please enter a valid 10-digit mobile number.");
//   }

//   // conditions for password

//   if (
//     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(
//       inputData.password
//     )
//   ) {
//     password_error.append(
//       "Please use 8 charcter password with one Uppercase and one lowercase and one digit"
//     );
//   }
//   // conditions for conform password

//   if (inputData.password !== inputData.conform_password) {
//     conform_password_error.append(
//       "Input password and confrim password do not match"
//     );
//   }
// }
// old code end

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputData = {
    first_name: document.getElementById("first_name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("mobile_number").value,
    password: document.getElementById("password").value,
    conform_password: document.getElementById("conform_password").value,
  };

  clearErrors(); // clear previous error messages
  cheackConditions(inputData);
});

function clearErrors() {
  // Clear previous error messages
  first_name_error.textContent = "";
  email_error.textContent = "";
  mobile_number_error.textContent = "";
  password_error.textContent = "";
  conform_password_error.textContent = "";
}

function cheackConditions(inputData) {
  // conditions for first name
  if (!/^[A-Za-z\s]{2,}$/.test(inputData.first_name)) {
    first_name_error.textContent = "First name can only contain letters";
  } else {
    console.log(`Frist Name:-${inputData.first_name}`);
  }

  // conditions for email
  if (!/^\S+@\S+\.\S+$/.test(inputData.email)) {
    email_error.textContent = "Please enter a valid email address.";
  }else {
    console.log(`Email:- ${inputData.email}`);
  }

  // conditions for mobile number
  if (!/^\d{10}$/.test(inputData.number)) {
    mobile_number_error.textContent =
      "Please enter a valid 10-digit mobile number.";
  }else {
    console.log(`Number:- ${inputData.number}`);
  }

  // conditions for password
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/.test(inputData.password)) {
    password_error.textContent = "Please use 8 character password with one Uppercase, one lowercase, and one digit.";
  }else {
    console.log(`Password:- ${inputData.password}`);
  }

  // conditions for confirm password
  if (inputData.password !== inputData.conform_password) {
    conform_password_error.textContent =
      "Input password and confirm password do not match.";
  }
}
