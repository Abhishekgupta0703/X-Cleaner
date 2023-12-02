// $(function () {
//     $('a.page-scroll').bind('click', function (event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// // Highlight the top nav as scrolling occurs
// $('body').scrollspy({
//     target: '.navbar-fixed-top'
// })

// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function () {
//     $('.navbar-toggle:visible').click();
// });
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('#burger');
    const navlinks = document.querySelector('.nav-links');
    const ctc = document.querySelector('.ctc')
    burger.addEventListener('click', function () {
        burger.classList.toggle('fa-bars');
        burger.classList.toggle('fa-xmark');
        navlinks.classList.toggle('open');
        navlinks.classList.toggle('close');
        ctc.classList.toggle('d-ctc')
    });
});
//scoll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
sr.reveal('.home-title', {});
// sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
// sr.reveal('.home__social-icon', { interval: 200 }); 
