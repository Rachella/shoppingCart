$(document).ready(function(){
// -------- Total
	var itemPrices = $('.unitPrice');
	var itemQuantities = $('.quantity');
	var itemLength = itemPrices.length;
	var totalPrice = 0;
	for (var i = 0; i < itemPrices.length; i++) {
		var itemPrices = Number($('#unitPrice'
	}
	

// -------- Create Button
	$('#create').click(function() {
		var itemName = $('#itemName').val();
		var newItemPrice = 	Number($('#newItemPrice').val());
		$('#newItem').prepend('<div>' + itemName + '</div>');
		$('#newItemPriceBox').prepend('<div>' + newItemPrice + '</div>');
	});

// -------- Delete Button
	$('#deleteItem').click(function() {
  		$(this).first().parent().slideUp();
	});

});

