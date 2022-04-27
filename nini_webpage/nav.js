const togglebtn = document.querySelector('.container_float_togglebtn');
const navigator = document.querySelector('navigator');

togglebtn.addEventListener('click', () => {
    navigator.classlist.togglebtn('active');
});