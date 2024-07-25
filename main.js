"use strict";

const menuButton = document.querySelector('#menu-btn');
const unorderedList = document.querySelector('#secondary-nav');

menuButton.addEventListener('click', () => {
    unorderedList.classList.toggle("active");
});

const listItems = document.querySelectorAll('.nav-link');
listItems.forEach(anchorTag => {
    anchorTag.addEventListener('click', () => {
        unorderedList.classList.remove('active');
    });
});