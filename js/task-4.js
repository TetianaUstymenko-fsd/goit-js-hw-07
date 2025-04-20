 // Завдання 4
 const form = document.querySelector(".login-form");
 form.addEventListener("submit", (event) => {
   event.preventDefault();
   const {
     elements: { email, password },
   } = event.currentTarget;
 
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
 
   if (emailValue === "" || passwordValue === "") {
     return alert("All form fields must be filled in");
   }
 
   const formData = {
     email: emailValue,
     password: passwordValue,
   };
 
   console.log(formData);
   form.reset();
 });
 
