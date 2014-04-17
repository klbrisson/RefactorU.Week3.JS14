$(document).on('ready', function() {
	var topPosition;
	var leftPosition;

	//Create Marker Variable and Styling




		var noteMarker = $("<div class='note-marker'></div>");


 	$(document).on('click', '#map', function() {
 		topPosition= event.pageY;
	 	leftPosition= event.pageX;
	
		// var noteMarker = $("<div class='note-marker'></div>");

 		var marker = $("<div class='marker'></div>");	
		marker		
		.width('10px')
		.height('10px')
		.css('background-color','#F00')
		.css('position','absolute')
		.css('top',topPosition + 'px')
		.css('left',leftPosition + 'px');
	 		
	 	$('.container').append(noteMarker).append(marker);

	 	//Create text area  ;to do later change note to input
	 	var note = $('<textarea class="note" placeholder="Add A Note!"></textarea>');
 		$('.container').append(note);
		$(".note").focus();

		//Note styling
		note
		.css('position','absolute')
		.css('top',topPosition + 10 + 'px')
		.css('left',leftPosition + 10 + 'px');
 	});

 	//Save note text and remove text area
 	$(document).on('blur','.note', function() {
 		var noteText = $('.note').val();
 		var saveNote = $('<div>'+noteText+'</div>');

 		saveNote
 		.css('position','absolute')
		.css('top',topPosition + 10 + 'px')
		.css('left',leftPosition + 10 + 'px');
 		$('.container').append(saveNote);
 		$(this).remove();
 		}
 	);

 	
 	$(document).on('click','.marker', function () {
 		$(this).remove();
 	});




 	$(document).on('click','.container', function() {
 		$("#log").text("pageX: "+event.pageX + ", pageY: " + event.pageY);
 	});

 	$(document).click(function() {
 		console.log("pageX: "+ event.pageX+"pageY: " +event.pageY);
 		console.log(leftPosition +"  "+ topPosition );
 		console.log(typeof leftPosition);

 	});

});