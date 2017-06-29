// Settings
window.mobileMenu = {
  'resizeTrigger': 768
};


// Scroll
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 0;

    if(y_scroll_pos > scroll_pos_test) {
        $('.nav-toggle-top').css('top', '5' + 'px')
    }
});

// Menu Toggles

/* Menu Top Offsets */
var menuTop = document.querySelector('.open-top .omni-mobile-menu'),
    offsetHeight = (menuTop === null)?null:menuTop.offsetHeight;

function closeMenu () {
    $(".toggle-btn").removeClass("toggled");
    $(".content-wrapper").removeClass("open-sidebar");
    $(".body-overlay").removeClass("overlay-clear");
    $(".omni-mobile-menu").removeClass("menu-open");
    document.querySelector('.content-wrapper').removeEventListener('click', toggleMenu);
}

function toggleMenu () {
    var container = document.querySelector('.content-wrapper'),
        toggleBtn = document.querySelector('.toggle-btn'),
        bodyOverlay = document.querySelector('.body-overlay');
        omniMenu = document.querySelector('.omni-mobile-menu');
    toggleBtn.classList.toggle('toggled');
    container.classList.toggle('open-sidebar');
    bodyOverlay.classList.toggle('overlay-clear');
    omniMenu.classList.toggle('menu-open');
    container.removeEventListener('click', toggleMenu);

    if (container.classList.contains('open-sidebar')) {
        container.addEventListener('click', toggleMenu);
    }

    /* Open Top */
    if ($('body').hasClass('open-top') && container.classList.contains('open-sidebar')) {
        $('.open-top .content-wrapper').css('top', offsetHeight+'px')
        $('.open-top .toggle-btn').css('top', offsetHeight + 15 +'px')
        $('.open-top .body-overlay').css('top', offsetHeight+'px')
    }
    else {
        $('.open-top .content-wrapper').css('top', '0')
        $('.open-top .toggle-btn').css('top', '15' + 'px')
        $('.open-top .body-overlay').css('top', '0')
    }
}

// Submenus
$(".omni-dropdown-toggle").click(function () {
    $dropdownToggle = $(this);
    $content = $dropdownToggle.next();
    $content.slideToggle(250, function () {
        if ($('body').hasClass('open-top')) {
            offsetHeight = menuTop.offsetHeight;
            $('.open-top .content-wrapper').css('top', offsetHeight+'px')
            $('.open-top .toggle-btn').css('top', offsetHeight + 15 +'px')
            $('.open-top .body-overlay').css('top', offsetHeight+'px')
        }
    });

});

// Close Menu on Links With '#'
$(".omni-mobile-menu a").click(function() {
    if (this.href.indexOf('#') === -1) {
       return;
    }
    
    toggleMenu();
});

$('.toggle-btn').click(toggleMenu);

// Close Menu on Window Resize
$(window).on('resize', function(){
      var win = $(this);
      if (win.width() >= mobileMenu.resizeTrigger) {
        closeMenu();
      }
});

// Swipe Functionality
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 $(function() {
     if (document.createEvent('TouchEvent')) {
       $(".open-left .content-wrapper").swipe( { swipeStatus:leftSwipe, allowPageScroll:"vertical"} );
       $(".open-right .content-wrapper").swipe( { swipeStatus:rightSwipe, allowPageScroll:"vertical"} );
     }

     function leftSwipe(event, phase, direction, distance, duration, fingers)
         {
         if ($(this).hasClass("open-sidebar")) {
             if (phase=="move" && direction =="left") {
                  closeMenu();
                  return false;
             }
         }
     }

     function rightSwipe(event, phase, direction, distance, duration, fingers)
         {
         if ($(this).hasClass("open-sidebar")) {
             if (phase=="move" && direction =="right") {
                   closeMenu();
                   return false;
             }
         }
     }
 });
}