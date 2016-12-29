// Settings

window.mobileMenu = {
  'resizeTrigger': 768
};


// Menu Top Offsets
var menuTop = document.querySelector('.openTop .mobileMenu'),
    offsetHeight = (menuTop === null)?null:menuTop.offsetHeight;

$('#navToggle').click(function(){
    if (menuTop === null) {return;}
    if (this.checked) {
        $('.openTop .contentWrapper').css('top', offsetHeight+'px')
        $('.openTop .toggleBtn').css('top', offsetHeight + 15 +'px')
        $('.openTop .bodyOverlay').css('top', offsetHeight+'px')
    }
    else {
        $('.openTop .contentWrapper').css('top', '0')
        $('.openTop .toggleBtn').css('top', '15' + 'px')
        $('.openTop .bodyOverlay').css('top', '0')
    }
})

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 0;

    if(y_scroll_pos > scroll_pos_test) {
        $('.navToggleTop').css('top', '5' + 'px')
    }
});

// Menu Toggles
function closeMenu () {
    $(".toggleBtn").removeClass("toggled");
    $(".contentWrapper").removeClass("open-sidebar");
    $(".bodyOverlay").removeClass("overlayClear");
    document.querySelector('.contentWrapper').removeEventListener('click', toggleMenu);
}

function toggleMenu () {
    var container = document.querySelector('.contentWrapper'),
        toggleBtn = document.querySelector('.toggleBtn'),
        bodyOverlay = document.querySelector('.bodyOverlay');
    toggleBtn.classList.toggle('toggled');
    container.classList.toggle('open-sidebar');
    bodyOverlay.classList.toggle('overlayClear');
    container.removeEventListener('click', toggleMenu);

    if (container.classList.contains('open-sidebar')) {
        container.addEventListener('click', toggleMenu);
    }
}

// Submenus
$(".dropdownToggle").click(function () {

    $dropdownToggle = $(this);
    $content = $dropdownToggle.next();
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
    });

});

// Close Menu on Links That Start With '#'
$(".mobileMenu a[href^='#']").click(function() {
    closeMenu();
});

document.querySelector('.toggleBtn').addEventListener('click', toggleMenu);

// Close Menu on Window Resize
$(window).on('resize', function(){
      var win = $(this);
      if (win.width() >= mobileMenu.resizeTrigger) {
        closeMenu();
      }
});

// Swipe Functionality
$(function() {
    if (document.createEvent('TouchEvent')) {
      $(".openLeft .contentWrapper").swipe( { swipeStatus:leftSwipe, allowPageScroll:"vertical"} );
      $(".openRight .contentWrapper").swipe( { swipeStatus:rightSwipe, allowPageScroll:"vertical"} );
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