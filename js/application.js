$(document).ready(function(){
	console.log(
	
	$('#create').click(function() {
		var itemName = $('#itemName').val();
		$('#itemBeforeCustom').append('<li>' + itemName + '</li>');
});
});

// $(document).ready(function(){
// 	console.log($

// 		('#list-example li').length);
// // ADD AN ITEM
// $('#addItem').click(function() {
// 	var itemName = $('#itemName').val();
// 	$('ul').append('<li>' + itemName + '</li>');
// });

// });
// $('#addItem').click(function() {
// 	var itemName = $('#itemName').val();
// 	$('ul').append('<li>' + itemName + '</li>');
// });

// 	<button id="addItem">Add Item</button>
// 	<input id="itemName">


// $(document).ready(function(){
// 	console.log($('#list-example li').length);

	// $('#list-example li').text('Fer');

	// This finds the list and execute the function
	// $('#list-example > li').click(function(){
	// console.log("A list item has been clicked");
	// $('ul li').last().remove();
	// or this line instread= $(this).remove();
// });

	// Allow the event to work even for NEW elements, it applies
	// globally
	// $(document).on('click', '#list-example > li', function() 
	// 	{ 
	// 	$(this).remove();
	// });
//mouseenter, click

// // ADD AN ITEM
// $('#addItem').click(function() {
// 	var itemName = $('#itemName').val();
// 	$('ul').append('<li>' + itemName + '</li>');
// });



// // remove, show, hide

// });



	// Selecting the button
	// $('#addItem')

	// Add an addItem
	// $('ul').append('<li>Fer</li>');

	// Append a new item every thing you click the button
	// $('#addItem').click(function(){
	// 	$('ul').append('<li>Fer</li>');
	// });

// 	$('li').click(function(){
// 		$('li').remove();
// 	});

// });

// console.log("This is working!");

// // First - test if the correct call action works with console
// $('#list-example > li').click(function()){
// 	console.log("A list item has been clicked");
// });























// $ is the same as jQuery
// $(document) is the same as jQuery(document)

// Selectors. Same as CSS Selector Knowledge
// $

// // Select by indirect desecendant
// $('ul li')

// // Select by direct desecendant
// $('ul')

// $('section > article > p').text()
// will return the text inside the paragraph


// var paragraph = $('Selection > article > p')
	// paragraph
	// paragraph.text()

// Traversing
	// lastLi.children()
	// [<ul>​…​</ul>​]
	// lastLi.children().children()
	// [<li>​1​</li>​, <li>​2​</li>​, <li>​3​</li>​]
	// lastLi.children().children().parent()
	// [<ul>​…​</ul>​]
	// lastLi.children().children().parent().parent()
	// [<li>​…​</li>​<ul>​…​</ul>​</li>​]
	// ------------------------------------
	// $('ul li')
	// [<li>​A​</li>​, <li>​B​</li>​, <li>​…​</li>​, <li>​1​</li>​, <li>​2​</li>​, <li>​3​</li>​]
	// $('ul li').first()
	// [<li>​A​</li>​]
	// $('ul li').first().next()
	// [<li>​B​</li>​]
	// $('ul li').last()
	// [<li>​3​</li>​]
	// $('ul li').last().prev()
	// [<li>​2​</li>​]

// $('ul li').last().text()
// "Rachel"
// $('ul li').last().html('Rach')
// [<li>​Rach​</li>​]

// OR

// $('ul li').last().text()
// "Rachel"
// $('ul li').last().text('Rach')



// $('#list-example').append('<li>C</li>') is the same 
// as $('<li>C</li>').appendTo('<li>C</li>')

// $('#list-example').prepend('<li>Z</li>')


// $('#list-example > li').first().after('<li>Yooooooo</li>')
// to insert after A which is the same as 
// $('<li>Timbbbeeerrr</li>').insertAfter('#list-example > li:first-child')

// $('#list-example > li').last().before('<li>Yooooooo</li>')
