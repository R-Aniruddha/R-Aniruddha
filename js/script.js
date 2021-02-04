/* Jumbotron Auto-Resize */
$('.jumbotron').css({ height: $(window).height() + 'px' })

$(window).on('resize', function () {
  $('.jumbotron').css({ height: $(window).height() + 'px' })
})

/* Tooltips Portfolio */
$('#card-1').on('mousemove', function (e) {
  $('#card-1-tooltip').css({ top: e.pageY, left: e.pageX })
  $('#card-1-tooltip').tooltip('show')
})
$('#card-2').on('mousemove', function (e) {
  $('#card-2-tooltip').css({ top: e.pageY, left: e.pageX })
  $('#card-2-tooltip').tooltip('show')
})
$('#card-3').on('mousemove', function (e) {
  $('#card-3-tooltip').css({ top: e.pageY, left: e.pageX })
  $('#card-3-tooltip').tooltip('show')
})
$('#card-4').on('mousemove', function (e) {
  $('#card-4-tooltip').css({ top: e.pageY, left: e.pageX })
  $('#card-4-tooltip').tooltip('show')
})
$('#card-5').on('mousemove', function (e) {
  $('#card-5-tooltip').css({ top: e.pageY, left: e.pageX })
  $('#card-5-tooltip').tooltip('show')
})

$('.card').on('mouseleave', function (e) {
  $('[data-toggle="tooltip"]').tooltip('hide')
})

/* Tooltips Experience */

$('a[data-toggle="centredart"]').tooltip({
  animation: true,
  placement: 'auto',
  html: true,
})

$('a[data-toggle="solarvillage"]').tooltip({
  animation: true,
  placement: 'left',
  html: true,
})

$('a[data-toggle="agp"]').tooltip({
  animation: true,
  placement: 'auto',
  html: true,
})

$('a[data-toggle="avportal"]').tooltip({
  animation: true,
  placement: 'auto',
  html: true,
})

$('a[data-toggle="octostudio"]').tooltip({
  animation: true,
  placement: 'auto',
  html: true,
})

$('a[data-toggle="avc"]').tooltip({
  animation: true,
  placement: 'auto',
  html: true,
})

/* Image Cards */

$.fn.tilt = function () {
  var perspective = '500px',
    delta = 20,
    width = this.width(),
    height = this.height(),
    midWidth = width / 2,
    midHeight = height / 2
  this.on({
    mousemove: function (e) {
      var pos = $(this).offset(),
        cursPosX = e.pageX - pos.left,
        cursPosY = e.pageY - pos.top,
        cursCenterX = midWidth - cursPosX,
        cursCenterY = midHeight - cursPosY

      $(this).css(
        'transform',
        'perspective(' +
          perspective +
          ') rotateX(' +
          cursCenterY / delta +
          'deg) rotateY(' +
          -(cursCenterX / delta) +
          'deg)'
      )
      $(this).removeClass('is-out')
    },
    mouseleave: function () {
      $(this).addClass('is-out')
    },
  })
  //Return
  return this
}

//Set plugin on cards
$('.card').tilt()
