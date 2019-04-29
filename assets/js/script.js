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
    let linkArr = ['mailto:earvin.capagcuan@gmail.com?subject=Good day&body=Hi.',
    'https://github.com/EarvinCapagcuan',
    'http://m.me/jek.capagcuan',
    'https://www.linkedin.com/in/julian-earvin-king-capagcuan'];

    if (e.target.classList.contains('email-to')) {
        window.open(linkArr[0], '_blank');
        location.reload();
    }
    if (e.target.classList.contains('git-hb')) {
        window.open(linkArr[1], '_blank');
        location.reload();
    }
    if (e.target.classList.contains('msgr-fb')) {
        window.open(linkArr[2], '_blank');
        location.reload();
    }
    if (e.target.classList.contains('lnkd-in')) {
        window.open(linkArr[3], '_blank');
        location.reload();
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
    
        /* add class active-link to the active window/link */
        let navLink = document.getElementsByClassName('nav-link');
        let act = active[0].getAttribute('data-target');

        for (let i = 0; i < navLink.length; i++) {
            let dataAttr = navLink[i].getAttribute('data-target');
            if (dataAttr == act) {
                navLink[i].classList.add('active-link');
            }else{
                navLink[i].classList.remove('active-link');
            }
        }

        /* will be used for backspace / return to prev page */
        prevWindows.unshift(activeWindow);
        if (prevWindows.length > 15) {
            prevWindows.pop();
        }
    }
});