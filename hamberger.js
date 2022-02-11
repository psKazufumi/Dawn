'use strict'

{
    const open = document.getElementById("open");
    const overlay = document.querySelector(".overlay");
    const close = document.getElementById("close");
    const menu = document.querySelector(".menu");

    open.addEventListener('click', ()=>{
        overlay.classList.add("show");
        menu.classList.add("nshow");
    });

    close.addEventListener('click', ()=>{
        overlay.classList.remove("show");
        menu.classList.remove("nshow");
    });
}