<script
  src="http://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>



$('.nature-list-item').on('click', function() {
	// pull out the nature pic url from the element's attributes
	var naturePicsUrl = $(this).attr('data-nature-pic')
  // log the nature pic url to the console
  console.log(naturePicsUrl)

  $('#nature-pics').empty()

  $('#nature-pics').css('background-image', `url(${naturePicsUrl})`)
})
