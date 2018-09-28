var count = $('.count');
var loader = $('#loader');
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 3000,
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});