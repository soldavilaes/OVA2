//This is a very simple tab group jQuery function I wrote for a site.
//vistit http://megadalbey.com for more fun stuff.
/*
jQuery(".tab-body-container").each(function(i, e) { //get all tab group containers
  t = getUrlVars()["t"]; //this bit only works if you're using it in a browser window and you pre-select a tab by adding (for example) ?t=1 for first tab to URL string.
  if (t) {
    jQuery(e).find(".tab-group").children().removeClass("tab-current");
    c = jQuery(e).find(".tab-group li#tab-" + t);
    c.addClass("tab-current");
  } else {
    c = jQuery(e).find(".tab-group li.tab-current"); //get the current tab
  }

  if (c.length == 0) { //if there isn't a current tab, get the first tab.
    c = jQuery(e).find(".tab-group").children().first();
    c.addClass("tab-current");
  }

  setTabBody(c);
});

jQuery(".tab-group li").click(function() { //when a tab is clicked, set to that tab.
  setTabBody(jQuery(this));
});

function setTabBody(c) {
  d = c.parent().parent(); //tab body container
  tID = jQuery(c).attr("id").split("-"); //tabID

  d.find(".body-group").children().hide(); //hide all tab bodies

  if (!c.hasClass("tab-current")) { //if clicked tab isn't set to current...
    c.parent().children().removeClass('tab-current'); //remove all current tab classes
    c.addClass('tab-current'); //make clicked tab the current tab
  }

  if (!d.find(".body-group li#body-" + tID[1]).is(":visible")) { //if clicked tab bodyID isn't visible...
    d.find(".body-group").children().hide(); //hide all tab bodies
    d.find(".body-group li#body-" + tID[1] + ", .body-group li#body-" + tID[1] + " li").show(); //show clicked tab body and any other li inside of body.
  }
}

function getUrlVars() { //this function parses out GET vars from URL
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}*/

/*--------------------------
* TEMA 2 - PESTAÑAS
---------------------------*/

$(function() {

  // Menu Tabular
  var $menu_tabs = $('.menu__tabs li a'); 
  $menu_tabs.on('click', function(e) {
    e.preventDefault();
    $menu_tabs.removeClass('active');
    $(this).addClass('active');

    $('.menu__item').fadeOut(300);
    $(this.hash).delay(300).fadeIn();
  });

});

/*--------------------------
* BOTON  EJEMPLO
---------------------------*/

$(".open_popup").click(function () {
   $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
   });
 $(".popup_close").click(function () {
   $(".popup_body").removeClass("popup_body_show");
   });
 $(".popup_back").click(function () {
   $(".popup_body").removeClass("popup_body_show");
   });