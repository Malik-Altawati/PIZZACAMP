 var totalPrice = 0;
 var objects = [
	{name: "Margherita Pizza",price: 10,quantity: 0, idPlus:"item1plus", idMinus: 'item1minus', ulid: "ul1", liid:"li1", label: "it1"},
	{name: "Tunisian Pizza",price: 11,quantity: 0, idPlus:"item2plus", idMinus: 'item2minus', ulid: "ul2", liid:"li2", label: "it2"},
	{name: "Italian Pizza",price: 8,quantity: 0, idPlus:"item3plus", idMinus: 'item3minus', ulid: "ul3", liid:"li3", label: "it3"},
	{name: "Neapolitan Pizza",price: 13,quantity: 0, idPlus:"item4plus", idMinus: 'item4minus', ulid: "ul4", liid:"li4", label: "it4"},
	{name: "Greek Pizza",price: 6,quantity: 0, idPlus:"item5plus", idMinus: 'item5minus', ulid: "ul5", liid:"li5", label: "it5"},
	{name: "California Pizza",price: 21,quantity: 0, idPlus:"item6plus", idMinus: 'item6minus', ulid: "ul6", liid:"li6", label: "it6"}
 ]
// object1 = {
// 	name: "Margherita Pizza",
// 	price: 10,
// 	quantity: 0
// }

/*function plus() {
	totalPrice += object1.price;
	object1.quantity += 1;
	if (object1.quantity > 1){
		
		$("#it1").text(object1.quantity);
		$('#li1').remove();
		$('ul').append('<li id="li1">' + object1.name + ' x' + object1.quantity + ' ' + object1.price * object1.quantity + '$' + '</li>');
		$('h2 span').text(totalPrice + '$');

	} else {
		$("#it1").text(object1.quantity);
		$('ul').append('<li id="li1">' + object1.name + ' x' + object1.quantity + ' ' + object1.price * object1.quantity + '$' + '</li>');
		$('h2 span').text(totalPrice + '$');
	}
	console.log(totalPrice)
}*/
$('.plus').on('click',function(){

	var search = ($(this).attr('id'));
  console.log(search);
 
	for(var i = 0; i < objects.length; i++){

		if (objects[i].idPlus === search){
			totalPrice += objects[i].price;
			objects[i].quantity += 1;
			if (objects[i].quantity > 1){

				$("#" + objects[i].label).text(objects[i].quantity);
				$('#' + objects[i].liid).remove();
				$('#'+objects[i].ulid).append('<li id='+ objects[i].liid +' >' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
				$('h2 span').text(totalPrice + '$');


			} else if (objects[i].quantity === 1) {
				$("#" + objects[i].label).text(objects[i].quantity);
				
				$('#'+ objects[i].ulid).html('<li id=' + objects[i].liid + '>' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
				$('h2 span').text(totalPrice + '$');

			}
			console.log(totalPrice)
		}
	}
})
	// totalPrice += objects[i].price;
	// objects[i].quantity += 1;
	// if (objects[i].quantity > 1){
		
	// 	$("#it1").text(objects[i].quantity);
	// 	$('#li1').remove();
	// 	$('ul').append('<li id="li1">' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
	// 	$('h2 span').text(totalPrice + '$');

	// } else {
	// 	$("#it1").text(objects[i].quantity);
	// 	$('ul').append('<li id="li1">' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
	// 	$('h2 span').text(totalPrice + '$');
	// }
	// console.log(totalPrice)

/*$('#item1plus').on('click',function(){
	totalPrice += object1.price;
	object1.quantity += 1;
	if (object1.quantity > 1){
		
		$("#it1").text(object1.quantity);
		$('#li1').remove();
		$('ul').append('<li id="li1">' + object1.name + ' x' + object1.quantity + ' ' + object1.price * object1.quantity + '$' + '</li>');
		$('h2 span').text(totalPrice + '$');

	} else {
		$("#it1").text(object1.quantity);
		$('ul').append('<li id="li1">' + object1.name + ' x' + object1.quantity + ' ' + object1.price * object1.quantity + '$' + '</li>');
		$('h2 span').text(totalPrice + '$');
	}
	console.log(totalPrice)

})*/


$('.minus').on('click',function(){

	var search = ($(this).attr('id'));
  console.log(search);
  

	for (var i = 0; i < objects.length; i++){
		if (objects[i].idMinus === search){
			// totalPrice -= objects[i].price;
			// objects[i].quantity -= 1;
			if( objects[i].quantity === 1){
				totalPrice -= objects[i].price;
				objects[i].quantity -= 1;
				$('#' + objects[i].liid).remove();
				$('#' + objects[i].label).text(objects[i].quantity);
				
			}else if (objects[i].quantity > 1){
				totalPrice -= objects[i].price;
				objects[i].quantity -= 1;
				$('#' + objects[i].liid).remove();
				$('#'+objects[i].ulid).append('<li id='+ objects[i].liid +' >' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');				
				$('#' + objects[i].label).text(objects[i].quantity);

			}
			$('h2 span').text(totalPrice + '$');
		}
		
	}
});

	/*if(object1.quantity > 0) {
		if(object1.quantity - 1 === 0){
			object1.quantity -= 1;
			$('#li1').remove();
			$("#it1").text(object1.quantity);
			$('h2 span').text(totalPrice + '$');
		} else {
			object1.quantity -= 1;
			$("#it1").text(object1.quantity);
			$('#li1').remove();
			$('ul').append('<li id="li1">' + object1.name + ' x' + object1.quantity + ' ' + object1.price * object1.quantity + '$' + '</li>');
			$('h2 span').text(totalPrice + '$');
		}
	}


	console.log(totalPrice);
})
*/

$('#cancel').on('click', function(){
	totalPrice = 0
	$('li').remove();
	$('h2 span').text(totalPrice + '$');
})

var coupons = ['QWERTYUI','12345678','asdfghjk','zxcvbnm0']

$('#coupon').on('click', function(){
for (var i = 0; i < coupons.length; i++){
	if( $('#enter-coupon').val() === coupons[i]){
		totalPrice = totalPrice - (totalPrice * 0.2)
		coupons.splice(i,1)
	}
}
$('h2 span').text(totalPrice + '$');
});

