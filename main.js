$(document).on('ready', function() {
	var topPosition;
	var leftPosition;

var inputBox = function (notecontainer) {
	var input = $('<textarea class="input" placeholder="Add A Note!"></textarea>');
 	notecontainer.append(input);
	// input.focus();


	//input box position
	input
		.css('position','absolute');
 	

 	//Save note text and remove text area
 	input.on('blur', function() {
	 	var noteText = $(this).val();
	 	var saveNote = $('<div class="note">'+noteText+'</div>');

	 	saveNote
	 		.css('position','absolute');
	 	notecontainer.append(saveNote);
	 	$(this).remove();
 	});
 };


var markerCreator = function () {
	var marker = $("<div class='marker'></div>");	
	var noteMarker = $("<div class='note-marker'></div>").append(marker);
	noteMarker
		.css('position','absolute')
		.css('top',topPosition + '%')
		.css('left',leftPosition + '%');
	marker		
		.width('10px')
		.height('10px')
		.css('background-color','#F00');
		inputBox(noteMarker);
 	return noteMarker;
};




 	$(document).on('click', '#map', function() {
 		// convert to percentages in order to scale
 		topPosition= (event.pageY/$('#map').height()) * 100;
 		console.log(event.pageY);
 		console.log(topPosition);
	 	leftPosition= event.pageX/$('#map').width() * 100;
	 	var newMarker = markerCreator();
	 	$('.container').append(newMarker);
	 	newMarker.find('textarea').focus();
	});
	
		// // var noteMarker = $("<div class='note-marker'></div>");
		// var noteMarker = $("<div class='note-marker'></div>");

 	// 	var marker = $("<div class='marker'></div>");	
		// marker		
		// .width('10px')
		// .height('10px')
		// .css('background-color','#F00')
		// .css('position','absolute')
		// .css('top',topPosition + 'px')
		// .css('left',leftPosition + 'px');
	 		
	 // 	$('.container').append(noteMarker);
	 // 	$('.note-marker').append(marker);

	 	//Create text area  ;to do later change note to input
	 // 	var input = $('<textarea class="input" placeholder="Add A Note!"></textarea>');
 	// 	$('.container').append(input);
		// $(".input").focus();

		// //Note styling
		// input
		// .css('position','absolute')
		// .css('top',topPosition + 10 + 'px')
		// .css('left',leftPosition + 10 + 'px');
 	// });

 	// //Save note text and remove text area
 	// $(document).on('blur','.input', function() {
 	// 	var noteText = $('.input').val();
 	// 	var saveNote = $('<div>'+noteText+'</div>');

 	// 	saveNote
 	// 	.css('position','absolute')
		// .css('top',topPosition + 10 + 'px')
		// .css('left',leftPosition + 10 + 'px');
 	// 	$('.container').append(saveNote);
 	// 	$(this).remove();
 	

 	
 	$(document).on('click','.marker', function () {
 		$(this).parent().remove();
 	});

});
