
import throttle from 'lodash.throttle';

let formData = {};
const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

initForm();

form.addEventListener('input', throttle(input, 500));
form.addEventListener('submit', onFormSubmit);

function input(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
   
    const { email, message } = evt.currentTarget.elements;
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(LOCAL_KEY);
    evt.currentTarget.reset();
    formData = {};
}

function initForm() {
    const reloadPage = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (reloadPage) {
        Object.entries(reloadPage).forEach(([name, value]) => {
            form.elements[name].value = value;
            formData[name] = value;
        });
    }
}