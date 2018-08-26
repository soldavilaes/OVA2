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

