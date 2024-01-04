// Menu Toggles
function stopScroll (event) {
    event.preventDefault();
    return false;
}

const body = document.body;
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.omni-mobile-menu');
const menuLinks = document.querySelectorAll('.omni-mobile-menu a');
const dropdownToggles = document.querySelectorAll('.omni-dropdown-toggle');
const toggleBtn = document.querySelector('.toggle-btn');

function toggleMenu () {
    body.classList.toggle('menu-open');
    body.removeEventListener('touchmove', stopScroll);
    hamburger.classList.toggle('active');

    if (body.classList.contains('menu-open')) {
        body.addEventListener('touchmove', stopScroll);
    }
}

function closeMenu () {
    if (body.classList.contains('menu-open')) {
        body.removeEventListener('touchmove', stopScroll);
        body.classList.remove('menu-open');
        hamburger.classList.remove('active');
    }
}

if (mobileMenu !== null) {
    mobileMenu.addEventListener('touchmove', function (event) {
        event.stopPropagation();
    });
}

// Submenus
for (let i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].addEventListener('click', function () {
        let toggle = this;
        let menu = this.nextElementSibling;
        toggle.classList.toggle('omni-menu-open');
        menu.classList.toggle('menu-collapsed');
    });
}

// Close Menu on Links With '#'
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        if (this.href.indexOf('#') === -1) {
            return;
        }
        closeMenu();
    });
}

// Toggle the menu
if (toggleBtn !== null) {
    toggleBtn.addEventListener('click', toggleMenu);
}

// Close menu on resize
window.addEventListener('resize', closeMenu);