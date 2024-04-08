let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// contact form

// JavaScript to show/hide the contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactForm = document.getElementById('contactForm');

    // Show the contact form when the button is clicked
    contactBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        contactForm.style.display = 'block'; // Display the contact form
    });

    // Hide the contact form when clicking outside of it
    document.addEventListener('click', function(event) {
        if (event.target !== contactBtn && !contactForm.contains(event.target)) {
            contactForm.style.display = 'none'; // Hide the contact form
        }
    });

    // Prevent the contact form from closing when clicking inside it
    contactForm.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
    });
});