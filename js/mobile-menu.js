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

$(document).ready(function() {
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("toggled");
  });

  $("[data-menu]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(".contentWrapper").toggleClass("open-sidebar");
  });

    $("[data-menu]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(".bodyOverlay").toggleClass("overlayClear");
  });
     
});

$(function() {
  $(".openLeft .contentWrapper").swipe( { swipeStatus:leftSwipe, allowPageScroll:"vertical"} );
  $(".openRight .contentWrapper").swipe( { swipeStatus:rightSwipe, allowPageScroll:"vertical"} );

    function leftSwipe(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="left") {
                 $(".contentWrapper").removeClass("open-sidebar");
                 $(".toggleBtn").removeClass("toggled");
                 $(".bodyOverlay").removeClass("overlayClear");
                 return false;
            }
    }

    function rightSwipe(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="right") {
                  $(".contentWrapper").removeClass("open-sidebar");
                  $(".toggleBtn").removeClass("toggled");
                  $(".bodyOverlay").removeClass("overlayClear");
                  return false;
             }
    }
});