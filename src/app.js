/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() { */
//write your code here
let form = document.querySelector('form');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    let errors = [];

    let card = document.querySelector('#card');
    let cvc = document.querySelector('#cvc');
    let ammount = document.querySelector('#ammount');
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let city = document.querySelector('#city');
    let state = document.querySelector('#state');
    let postalCode = document.querySelector('#postalCode');
    let weAccept = document.querySelector('#weAccept');
    let message = document.querySelector('#message');
    let cancel = document.querySelector('#cancel');
    let submit = document.querySelector('#submit');

    let empty = /^$/;