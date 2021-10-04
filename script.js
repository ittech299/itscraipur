window.onload = function () {
    console.log("loaded")
    var typed = new Typed('#typed', {
        strings: ["Welcome to Information Technology Support Center", "All Types Of Online Forms","Multi Color Designing","All Type Of Printing Work","Estamp","All Types Of Computer Related Works"],
        backSpeed: 15,
        smartBackspace: true,
        backDelay: 1200,
        startDelay: 1000,
        typeSpeed: 25,
        loop: true,
    });
};

/* Hamburger */

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
img = document.querySelector('.img-primary')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    img.classList.toggle('img-resp');
    
})

