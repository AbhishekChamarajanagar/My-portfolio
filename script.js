document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

//   const skills = [
//     { name: "Git", icon: "./assets/icon-git.svg" },
//     { name: "JavaScript", icon: "./assets/icon-javscript.svg" },
//     { name: "Css", icon: "./assets/css.svg" },
//     { name: "Html", icon: "./assets/html.svg" }
// ];
// const skill_list = document.getElementById("skill-list");



// skills.forEach(skill => {
//   const skillCard = document.createElement("div");

//   skillCard.innerHTML = `
//       <img src="${skill.icon}" alt="${skill.name}">
//       <p>${skill.name}</p>
//   `;

//   skill_list.appendChild(skillCard);
// });
  // Check for saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle button icon
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });

  // Contact Form Validation
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  });
});




// document.addEventListener('DOMContentLoaded', () => {
//   emailjs.init("9Vltul0Ls8DGE8MnW"); // Replace with your EmailJS Public Key

//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     const formData = {
//       name: name,
//       email: email,
//       message: message
//     };

//     emailjs.send("service_67dxvso", "template_6gbur1y", formData)
//       .then(response => {
//         alert("Your message has been sent successfully!");
//         document.getElementById("contact-form").reset(); // Reset form
//       })
//       .catch(error => {
//         console.error("Error:", error);
//         alert("Failed to send message. Please try again later.");
//       });
//   });
// });



// function sendMail(){
//   let parms = {
//     name : document.getElementById("name").value ,
//     email : document .getElementById ("email").value ,
//     message : document .getElementById ("message").value 
//   }

//   emailjs.send ("service_67dxvso" ,"template_dnydtac" ,parms).then(alert("email sent succsessfull"))
// }
