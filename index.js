const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.logIn-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btn-login');
const iconClose = document.querySelector('.icon-close');
const inputValue = document.querySelectorAll('.inputValue');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');

});
btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    inputValue.value = ' ';
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active', 'active-popup');
    inputValue.forEach(input => input.value = '');
});