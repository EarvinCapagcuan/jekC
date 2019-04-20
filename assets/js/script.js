let nav = document.getElementsByClassName('nav-container');
let navButton = document.getElementsByClassName('burger-icon');
let navButtonClose = document.getElementsByClassName('burger-close');
let profileButton = document.getElementsByClassName('profile-btn');
let navUl = document.getElementsByClassName('nav');
let submitButton = document.getElementsByClassName('contact-button');
let head = document.getElementsByClassName('header');
let navButtonStatus = false;
let scrollStatus = false;
let prevWindows = [];

window.addEventListener('keydown', function (e) {
    let key = e.keyCode || event.charCode;
    if (key == 8) {
        console.log('backspace');
    }
});

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 10) {
        scrollStatus = true;
    } else {
        scrollStatus = false;
    }
    changeBg(); 
});

function changeBg(){
    if (navButtonStatus && document.documentElement.scrollTop > 10) {
        head[0].classList.add('scrolled');
    } else {
        scrollStatus = false;
        head[0].classList.remove('scrolled');
    }
}

function navBarChange(x) {
    if (navButtonStatus) {
        navUl[0].classList.replace('fadeInRight', 'fadeOutRight');
        window.setTimeout(function(){
            navUl[0].classList.remove('fadeOutRight');
            nav[0].classList.replace('show', 'hide');
        }, 500);
        navButtonStatus = false;
    }else{
        navButtonStatus = true;
        nav[0].classList.replace('hide', 'show');
        navUl[0].classList.add('fadeInRight');
    }
    changeBg();
    x.classList.toggle("change");
    navButton[0].classList.toggle("active-button");
}

window.addEventListener('click', function(e){
    if (e.target.classList.contains('email-to')) {
        window.location = "mailto:earvin.capagcuan@gmail.com?subject=Good day&body=Hi.";
    }
    /* prevent anchor from */
    e.preventDefault();

    if (e.target.nodeName == 'A') {
        let address = e.target.getAttribute('href');
        let links = ['home', 'profile', 'skills', 'works', 'contact'];
        /* spread address text to array */
        let a = [...address];
        /* remove # in href */
        a.shift();
        /* join address text after removing # */
        let x =  a.join('');
        /* determine element with active-content class */
        let active = document.getElementsByClassName('active-content');
        /* target data-target of link that was clicked */
        let activeWindow = active[0].getAttribute('data-target');
        let goToLink = document.getElementsByClassName(x);
        
        /* determine the active section */
        if (x != activeWindow) {
            /* remove active-content class to hide section */
            active[0].classList.toggle('active-content');
            /* get and switch active link */
            goToLink[0].classList.toggle('active-content');
        }
    
        /* add class text-muted to the active window/link */
        let navLink = document.getElementsByClassName('nav-link');
        let act = active[0].getAttribute('data-target');

        for (let i = 0; i < navLink.length; i++) {
            let dataAttr = navLink[i].getAttribute('data-target');
            if (dataAttr == act) {
                navLink[i].classList.add('text-muted');
            }else{
                navLink[i].classList.remove('text-muted');
            }
        }

        /* will be used for backspace / return to prev page */
        prevWindows.unshift(activeWindow);
        if (prevWindows.length > 15) {
            prevWindows.pop();
        }
    }
});

/* prticles js */
particlesJS("particles-js", { "particles": { "number": { "value": 6, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#1b1e34" }, "shape": { "type": "polygon", "stroke": { "width": 0, "color": "#000" }, "polygon": { "nb_sides": 6 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.3, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 160, "random": false, "anim": { "enable": true, "speed": 10, "size_min": 40, "sync": false } }, "line_linked": { "enable": false, "distance": 200, "color": "#ffffff", "opacity": 1, "width": 2 }, "move": { "enable": true, "speed": 8, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });