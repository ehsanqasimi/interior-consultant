let burger = document.querySelector('.burger');
let ul = document.querySelector('nav');

burger.onclick = function() {
    ul.classList.toggle('show');
    if(burger.textContent === 'close') {
        burger.textContent = 'menu'
    }else if(burger.textContent === 'menu') {
        burger.textContent = 'close'
    }
}