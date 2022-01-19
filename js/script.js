let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.add('active');
}

//Sass -> sass --watch ./scss/style.scss:./css/style.css