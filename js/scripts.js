$('.nature-list-item').on('click', function() {
	// pull out the nature pic url from the element's attributes
	var naturePicsUrl = $(this).attr('data-nature-pic')
  // log the nature pic url to the console
  console.log(naturePicsUrl)

  $('#nature-pics').empty()

  $('#nature-pics').css('background-image', `url(${naturePicsUrl})`)
})

$('#shake').click(function() {
	var random = Math.floor(Math.random() * 2)

  if (random === 0) {
  bounce($('.plane'))
  }

  if (random === 1) {
  bounce($('.plane'))
  }
})

function bounce(thing) {
  var interval = 300;
  var distance = 500;
  var times = 10;
  var damping = 0.8;

  for (var i = 0; i < (times + 1); i++) {
    var amt = Math.pow(-1, i) * distance / (i * damping);
    $(thing).animate({
      top: amt
    }, 100);
  }
  $(thing).animate({
    top: 0
  }, interval);
}
