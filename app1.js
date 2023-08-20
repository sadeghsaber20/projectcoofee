// .............for hambearger meno responsiv site..به همراه فعال css.................
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    // ....................
    // navbar.classList.remove('active');
    searchbox.classList.remove('active');    
    carts_menu.classList.remove('active');
}
// ...for menou carts......................به همراه فعال css.......................
let carts_menu=document.querySelector('.cart-itmes-container');
document.querySelector('#cart-btn').onclick=()=>{
    carts_menu.classList.toggle('active');
    // .....................
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
    
}
// .............for searchbox site............به همراه فعال css..
let searchbox=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchbox.classList.toggle('active');
    // ..................................
    navbar.classList.remove('active');
    carts_menu.classList.remove('active');

    
}
// ..........................................
window.onscroll=()=>{
    navbar.classList.remove('active');
    searchbox.classList.remove('active');
    searchbox.classList.remove('active');
}
// ....................................................
