// Menu Toggles
function stopScroll (event) {
    event.preventDefault();
    return false;
}

function toggleMenu () {
    document.body.classList.toggle('menu-open');
    document.body.removeEventListener('touchmove', stopScroll);
    document.getElementById('hamburger').classList.toggle('active');

    if (document.body.classList.contains('menu-open')) {
        document.body.addEventListener('touchmove', stopScroll);
    }
}

function closeMenu () {
    if (document.body.classList.contains('menu-open')) {
        document.body.removeEventListener('touchmove', stopScroll);
        document.body.classList.remove('menu-open');
        document.getElementById('hamburger').classList.remove('active');
    }
}

$('.body-overlay').on('touchmove', closeMenu);

$('.omni-mobile-menu').on('touchmove', function (event) { event.stopPropagation(); });

// Submenus
$('.omni-dropdown-toggle').click(function () {
    var $dropdownToggle = $(this);
    $dropdownToggle.toggleClass('omni-menu-open');
    $content = $dropdownToggle.next();
    $content.slideToggle(250);
});

// Close Menu on Links With '#'
$('.omni-mobile-menu a').click(function () {
    if (this.href.indexOf('#') === -1) {
        return;
    }

    closeMenu();
});

$('.toggle-btn').click(toggleMenu);

// $(window).on('resize', function () {
//     closeMenu();
// });