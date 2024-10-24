const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const passaword_input = document.getElementById('passaword-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    alert(email_input.value);
    error_message.innerText = passaword_input.value
});