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
    $(".toggleBtn").removeClass("toggled");
    $(".contentWrapper").removeClass("open-sidebar");
    $(".bodyOverlay").removeClass("overlayClear");
    $(".dropdown-menu").toggleClass("hidden");
});

document.querySelector('.toggleBtn').addEventListener('click', toggleMenu);

// Swipe Functionality
$(function() {
  $(".openLeft .contentWrapper").swipe( { swipeStatus:leftSwipe, allowPageScroll:"vertical"} );
  $(".openRight .contentWrapper").swipe( { swipeStatus:rightSwipe, allowPageScroll:"vertical"} );

    function leftSwipe(event, phase, direction, distance, duration, fingers)
        {
            if ($(".contentWrapper").hasClass("open-sidebar")) {
                if (phase=="move" && direction =="left") {
                     $(".contentWrapper").removeClass("open-sidebar");
                     $(".toggleBtn").removeClass("toggled");
                     $(".bodyOverlay").removeClass("overlayClear");
                     return false;
                }
            }
    }

    function rightSwipe(event, phase, direction, distance, duration, fingers)
        {
            if ($(".contentWrapper").hasClass("open-sidebar")) {
                if (phase=="move" && direction =="right") {
                      $(".contentWrapper").removeClass("open-sidebar");
                      $(".toggleBtn").removeClass("toggled");
                      $(".bodyOverlay").removeClass("overlayClear");
                      return false;
                }
            }
    }
});