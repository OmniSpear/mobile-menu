// Menu Toggles
function stopScroll (event) {
    event.preventDefault();
    return false;
}

function toggleMenu () {
    document.body.classList.toggle('menu-open');
    $('html').toggleClass('no-scroll');
    document.body.removeEventListener('touchmove', stopScroll);

    if (document.body.classList.contains('menu-open')) {
        document.body.addEventListener('touchmove', stopScroll);
    }
}

function closeMenu () {
    if (document.body.classList.contains('menu-open')) {
        document.body.removeEventListener('touchmove', stopScroll);
        document.body.classList.remove('menu-open');
        $('html').removeClass('no-scroll');
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

// Window Resize
window.mobileMenu = {
  'resizeTrigger': 768
};

$(window).on('resize', function () {
    var win = $(this);
    if (win.width() >= mobileMenu.resizeTrigger) {
        closeMenu();
    }
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Swipe Functionality
    $(function () {
        if (document.createEvent('TouchEvent')) {
            $('.open-left').swipe( { swipeStatus:leftSwipe, allowPageScroll:'vertical'} );
            $('.open-right').swipe( { swipeStatus:rightSwipe, allowPageScroll:'vertical'} );
        }

        function leftSwipe(event, phase, direction) {
            if ($(this).hasClass('menu-open')) {
                if (phase === 'move' && direction === 'left') {
                    closeMenu();
                    return false;
                }
            }
        }

        function rightSwipe(event, phase, direction) {
            if ($(this).hasClass('menu-open')) {
                if (phase === 'move' && direction === 'right') {
                    closeMenu();
                    return false;
                }
            }
        }
    });
}