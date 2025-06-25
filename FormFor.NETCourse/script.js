// document.getElementById("registerForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const userData = {
//     "First Name": document.getElementById("firstName").value,
//     "Last Name": document.getElementById("lastName").value,
//     "Email": document.getElementById("email").value,
//     "Phone": document.getElementById("phone").value,
//     "Date of Birth": document.getElementById("dob").value,
//     "Gender": document.getElementById("gender").value,
//     "English Level": document.getElementById("english").value,
//     "Russian Level": document.getElementById("russian").value,
//     "Math Level": document.getElementById("math").value,
//     "Goal": document.getElementById("goal").value
//   };

//   let resultDiv = document.getElementById("result");
//   resultDiv.style.display = "block";
//   resultDiv.innerText = Object.entries(userData)
//     .map(([key, value]) => `${key}: ${value}`)
//     .join('\n');

//   this.reset();
// });
