const DoAnimation = document.getElementById('DoAnimation');
const UnDoAnimation = document.getElementById('UnDoAnimation');

const searchBar = document.querySelectorAll('.searchBar');
const leftContain = document.querySelectorAll('.leftContain');
const overlayLeftContain = document.querySelectorAll('.overlayLeftContain');
const containForm = document.querySelectorAll('.containForm');
const form = document.querySelectorAll('.form');
const form_input = document.querySelectorAll(".form > input");

DoAnimation.addEventListener('click', () => {
    leftContain.forEach(elem => {
        elem.classList.remove('growFullR');
        elem.classList.add('growFull');
    });
    overlayLeftContain.forEach(elem => {
        elem.classList.remove('moveBackGroundR');
        elem.classList.add('moveBackGround');
    });
    containForm.forEach(elem => {
        elem.classList.remove('decreaseFullR');
        elem.classList.add('decreaseFull');
    });
    form.forEach(elem => {
        elem.classList.remove('formToSearchR');
        elem.classList.add('formToSearch');
    });
    form_input.forEach(elem => {
        elem.classList.remove('opacityInputFormR');
        elem.classList.add('opacityInputForm');
    });
    searchBar.forEach(elem => {
        elem.classList.remove('opacityInputFormR');
        elem.classList.add('opacityInputForm');
    });
})

UnDoAnimation.addEventListener('click', () => {
    leftContain.forEach(elem => {
        elem.classList.remove('growFull');
        elem.classList.add('growFullR');
    });
    overlayLeftContain.forEach(elem => {
        elem.classList.remove('moveBackGround');
        elem.classList.add('moveBackGroundR');
    });
    containForm.forEach(elem => {
        elem.classList.remove('decreaseFull');
        elem.classList.add('decreaseFullR');
    });
    form.forEach(elem => {
        elem.classList.remove('formToSearch');
        elem.classList.add('formToSearchR');
    });
    form_input.forEach(elem => {
        elem.classList.remove('opacityInputForm');
        elem.classList.add('opacityInputFormR');
    });
    searchBar.forEach(elem => {
        elem.classList.remove('opacityInputForm');
        elem.classList.add('opacityInputFormR');
    });
})