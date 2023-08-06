import throttle from 'lodash.throttle';

let formData = {};
const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(input, 500));
form.addEventListener('submit', onFormSubmit);

function input() {
    form.addEventListener('input', function(evt){
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(LOCAL_KEY, JSON.stringify(formData))})
};

function onFormSubmit(evt) {
       evt.preventDefault();
       const { email, message } = evt.currentTarget.elements;
       console.log({ email: email.value, message: message.value });
       localStorage.removeItem(LOCAL_KEY);
       evt.currentTarget.reset();
    };






// const LOCAL_KEY = 'feedback-form-state';

// form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(onInputData, 500));
// form.addEventListener('submit', onFormSubmit);

// let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
// const { email, message } = form.elements;
// reloadPage();

// function onInputData(e) {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
// }

// function reloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }

//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
//   dataForm = {};
// }