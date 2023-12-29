const bodyOverlay = document.querySelector("body");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

const toggle = function() {
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true)
    primaryNav.toggleAttribute('data-visible');
    bodyOverlay.toggleAttribute('data-overlay');
    bodyOverlay.classList.toggle('scroll-disable');
}

navToggle.addEventListener('click', () => {
    toggle();
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && bodyOverlay.classList.contains('scroll-disable')) {
        toggle();
    }
});