// JavaScript for form validation
const form = document.getElementById('myForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(name === "" || email === "" || password === "") {
        message.textContent = "All fields are required!";
        message.className = "error";
    } else if(password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.className = "error";
    } else {
        message.textContent = "Form submitted successfully!";
        message.className = "success";

        // Reset form
        form.reset();
    }
});
