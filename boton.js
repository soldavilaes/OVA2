var outButton = document.querySelector('.click'),
    pop = document.getElementById('click_button');
var main = document.getElementById("window");
var shadow = document.querySelector("body");
var hide = document.getElementById("close");

function simulator_FB (){
  "use strict"
  main.style.display = "block";
  shadow.style.backgroundColor = "rgba(0, 0, 0, 0.38)"
}

function simulator_FB_close (){
  "use strict"
  main.style.display = "none";
   shadow.style.backgroundColor = "#FFF"

}
/* Boton pestaña 4 step 2 */
$('.pop-up').hide(0);
$('.pop-up-container').hide(0);

$('.pop-up-button').click(function(){
  $('.pop-up-container').show(0);
  $('.pop-up').fadeIn(300);
  $('.pop-up-button').hide(0);
});
$('.pop-up span').click(function() {
  $('.pop-up-container').hide(0);
  $('.pop-up').hide(0);
  $('.pop-up-button').show(0);
});


/* LIGHTBOX */

$(document).ready(function () {
    "use strict";
    $(".lightbox").click(function () {
        var imgsrc = $(this).attr('src');
        $("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" + imgsrc + "'></div>");
        $(".close-lightbox, .img-popup").click(function () {
            $(".img-popup").fadeOut(500, function () {
                $(this).remove();
            }).addClass("lightboxfadeout");
        });

    });
    $(".lightbox").click(function () {
        $(".img-popup").fadeIn(500);
    });

});

/*PESTAÑA 5*/

var tabbedContent = function() {
    //get all tab link elements
    var tab = document.getElementsByClassName("tab-link");
    //get all tab content elements
    var tabContent = document.getElementsByClassName("tab-content");
    //loop through each tab
    for (var i = 0; i < tab.length; i++) {
        //add click event listener to all tab links
        tab[i].addEventListener('click', function() {
            //each time tab clicked remove all current classes
            //remove 'current' class from all tabs
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove('current');
            };
            //remove 'current' class from all tab content
            for (var i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('current');
            };
            //add current class back to the clicked tab
            this.className += ' current';
            //get data-tab attribute of what has been clicked
            var matchingTab = this.getAttribute('data-tab');
            //add current class to the tabContent element thats id matches the data-tab of the clicked tab
            document.getElementById(matchingTab).className += ' current';
        }, false);
    }
}

tabbedContent();

/* PESTAÑA 6: SLIDER*/
// initialize is-active and is-visible states on "first" tab and slides.
$("[class^=slide]").find("li").eq(0).addClass("is-active");
$("[class$=content]").find("[class$=pane]").eq(0).addClass("slide--content__pane--is-visible");

// click functions for tabs and slides
$("[class^=slide]").on("click", "li", function(){
  var $this = $(this),
    listIndex = $this.index(); // gets the index of the clicked list item
  
  // add active class to currently "clicked" list item
  $this.closest("ul").find("li").removeClass("is-active"); // remove class from previously clicked li's
  $this.addClass("is-active"); // add to newly clicked li
  
  // display associated pane and associate the pane of the same index with the list item being clicked
  var paneIndex = $(".slide--content__pane:eq(" + listIndex + ")");
  $(".slide--content").children().removeClass("slide--content__pane--is-visible");
  paneIndex.addClass("slide--content__pane--is-visible");
});


/* CARRUSEL PESTAÑA 6*/
var carousel = $('#carousel'),
    threshold = 150,
    slideWidth = 500,
    dragStart, 
    dragEnd;

$('#next').click(function(){ shiftSlide(-1) })
$('#prev').click(function(){ shiftSlide(1) })

carousel.on('mousedown', function(){
  if (carousel.hasClass('transition')) return;
  dragStart = event.pageX;
  $(this).on('mousemove', function(){
    dragEnd = event.pageX;
    $(this).css('transform','translateX('+ dragPos() +'px)')
  })
  $(document).on('mouseup', function(){
    if (dragPos() > threshold) { return shiftSlide(1) }
    if (dragPos() < -threshold) { return shiftSlide(-1) }
    shiftSlide(0);
  })
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass('transition')) return;
  dragEnd = dragStart;
  $(document).off('mouseup')
  carousel.off('mousemove')
          .addClass('transition')
          .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
  setTimeout(function(){
    if (direction === 1) {
      $('.slides:first').before($('.slides:last'));
    } else if (direction === -1) {
      $('.slides:last').after($('.slides:first'));
    }
    carousel.removeClass('transition')
    carousel.css('transform','translateX(0px)'); 
  },700)
}

/*CARRUSEL PESTAÑA 8*/
var carousels = document.querySelector('.carousels');
var containerC = carousels.querySelector('.carousels-container');
var prevBtn = carousels.querySelector('.carousels-prevs');
var nextBtn = carousels.querySelector('.carousels-nexts');
var pagination = carousels.querySelector('.carousels-pagination');
var bullets = [].slice.call(carousels.querySelectorAll('.carousels-bullet'));
var totalItems = containerC.querySelectorAll('.carousels-item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function nexts() {
    slideTo(currentIndex + 1);
}

function prevs() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    containerC.style.WebkitTransform = containerC.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', prevs, false);
nextBtn.addEventListener('click', nexts, false);

pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);

/* PESTAÑA 8 - CASOS */
$(".circle1").mouseover(function(){
  $(this).addClass("glow");
  $(".arrow1").addClass("glow-arrow");
});

$(".circle1").mouseleave(function(){
  $(this).removeClass("glow");
  $(".arrow1").removeClass("glow-arrow");
});

$(".circle1").click(function(){
  $(".dropdown").slideToggle();
  $(".item1s").toggleClass("reflect");
});

$(".circle2").mouseover(function(){
  $(this).addClass("glow2");
  $(".arrow2").addClass("glow-arrow2");
});
$(".circle2").mouseleave(function(){
  $(this).removeClass("glow2");
  $(".arrow2").removeClass("glow-arrow2");
});

$(".circle2").click(function(){
  $(".dropdown2").slideToggle();
  $(".item2").toggleClass("reflect");
});

/* PESTAÑA 4 */
$(document).ready(function () {

  // Intial Border Position
  var activeP4Pos = $('.tabsP4-header .activeP4').position();

  // Change Position
  function changePos() {

    // Update Position
    activeP4Pos = $('.tabsP4-header .activeP4').position();

    // Change Position & Width
    $('.borderP4').stop().css({
      left: activeP4Pos.left,
      width: $('.tabsP4-header .activeP4').width()
    });
  }

  changePos();

  // Intial Tab Height
  var tabHeight = $('.tabP4.activeP4').height();

  // Animate Tab Height
  function animateTabHeight() {

    // Update Tab Height
    tabHeight = $('.tabP4.activeP4').height();

    // Animate Height
    $('.tabsP4-content').stop().css({
      height: tabHeight + 'px'
    });
  }

  animateTabHeight();

  // Change Tab
  function changeTab() {
    var getTabId = $('.tabsP4-header .activeP4 a').attr('tab-id');

    // Remove Active State
    $('.tabP4').stop().fadeOut(300, function () {
      // Remove Class
      $(this).removeClass('activeP4');
    }).hide();

    $('.tabP4[tab-id=' + getTabId + ']').stop().fadeIn(300, function () {
      // Add Class
      $(this).addClass('activeP4');

      // Animate Height
      animateTabHeight();
    });
  }

  // Tabs
  $('.tabsP4-header a').on('click', function (e) {
    e.preventDefault();

    // Tab Id
    var tabId = $(this).attr('tab-id');

    // Remove Active State
    $('.tabs-header a').stop().parent().removeClass('activeP4');

    // Add Active State
    $(this).stop().parent().addClass('activeP4');

    changePos();

    // Update Current Itm
    tabCurrentItem = tabItems.filter('.activeP4');

    // Remove Active State
    $('.tabP4').stop().fadeOut(300, function () {
      // Remove Class
      $(this).removeClass('activeP4');
    }).hide();

    // Add Active State
    $('.tabP4[tab-id="' + tabId + '"]').stop().fadeIn(300, function () {
      // Add Class
      $(this).addClass('activeP4');

      // Animate Height
      animateTabHeight();
    });
  });

  // Tab Items
  var tabItems = $('.tabsP4-header ul li');

  // Tab Current Item
  var tabCurrentItem = tabItems.filter('.activeP4');

  // Next Button
  $('#next').on('click', function (e) {
    e.preventDefault();

    var nextItem = tabCurrentItem.next();

    tabCurrentItem.removeClass('activeP4');

    if (nextItem.length) {
      tabCurrentItem = nextItem.addClass('activeP4');
    } else {
      tabCurrentItem = tabItems.first().addClass('activeP4');
    }

    changePos();
    changeTab();
  });

  // Prev Button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    var prevItem = tabCurrentItem.prev();

    tabCurrentItem.removeClass('activeP4');

    if (prevItem.length) {
      tabCurrentItem = prevItem.addClass('activeP4');
    } else {
      tabCurrentItem = tabItems.last().addClass('activeP4');
    }

    changePos();
    changeTab();
  });

  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (ripple.height() / 2),
      left: rippleX - (ripple.width() / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1500);
  });

var vue = new Vue({
  el: '#app',
  data: {
    formOpen: false,
    productData: {
      is_featured: false
    }
  },
  methods: {
    resetForm: function () {
      this.productData = {
        is_featured: false
      }
    },
    cancel: function() {
      this.formOpen = false;
      this.resetForm();
    }
  }
})

  
});
