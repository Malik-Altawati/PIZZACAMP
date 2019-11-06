//# here we delcare the total price 
var totalPrice = 0;
//# here we delcare an araray of objects , which are the products we have . 
var objects = [{
    name: "Margherita Pizza",
    price: 10,
    quantity: 0,
    idPlus: "item1plus",
    idMinus: 'item1minus',
    ulid: "ul1",
    liid: "li1",
    label: "it1"
  },{
    name: "Tunisian Pizza",
    price: 11,
    quantity: 0,
    idPlus: "item2plus",
    idMinus: 'item2minus',
    ulid: "ul2",
    liid: "li2",
    label: "it2"
  },{
    name: "Italian Pizza",
    price: 8,
    quantity: 0,
    idPlus: "item3plus",
    idMinus: 'item3minus',
    ulid: "ul3",
    liid: "li3",
    label: "it3"
  },{
    name: "Neapolitan Pizza",
    price: 13,
    quantity: 0,
    idPlus: "item4plus",
    idMinus: 'item4minus',
    ulid: "ul4",
    liid: "li4",
    label: "it4"
  },{
    name: "Greek Pizza",
    price: 6,
    quantity: 0,
    idPlus: "item5plus",
    idMinus: 'item5minus',
    ulid: "ul5",
    liid: "li5",
    label: "it5"
  },{
    name: "California Pizza",
    price: 21,
    quantity: 0,
    idPlus: "item6plus",
    idMinus: 'item6minus',
    ulid: "ul6",
    liid: "li6",
    label: "it6"
  }
]
//////////////////////////////////////////////////////
//# on click of any element with the plus class , the id of that element will be taken and used  
// when we iterate, searching for what object we just changed.
// we used this key word to specificlly select the id in that element
$('.plus').on('click', function() {

  var thisId = ($(this).attr('id'));


  for (var i = 0; i < objects.length; i++) {

    if (objects[i].idPlus === thisId) {
      totalPrice += objects[i].price;
      objects[i].quantity += 1;
      if (objects[i].quantity > 1) {

        $("#" + objects[i].label).text(objects[i].quantity);
        $('#' + objects[i].liid).remove();
        $('#' + objects[i].ulid).append('<li id=' + objects[i].liid + ' >' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
        $('h2 span').text(totalPrice + '$');


      } else if (objects[i].quantity === 1) {

        $("#" + objects[i].label).text(objects[i].quantity);
        $('#' + objects[i].ulid).html('<li id=' + objects[i].liid + '>' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
        $('h2 span').text(totalPrice + '$');

      }
    }
  }
})
//////////////////////////////////////////////////////////
//# on click of any element with the minus class , the id of that element will be taken and used  
// when we iterate, searching for what object we just changed.
// we used this key word to specificlly select the id in that element

$('.minus').on('click', function() {

  var thisId = ($(this).attr('id'));



  for (var i = 0; i < objects.length; i++) {
    if (objects[i].idMinus === thisId) {

      if (objects[i].quantity === 1) {
        totalPrice -= objects[i].price;
        objects[i].quantity -= 1;
        $('#' + objects[i].liid).remove();
        $('#' + objects[i].label).text(objects[i].quantity);

      } else if (objects[i].quantity > 1) {
        totalPrice -= objects[i].price;
        objects[i].quantity -= 1;
        $('#' + objects[i].liid).remove();
        $('#' + objects[i].ulid).append('<li id=' + objects[i].liid + ' >' + objects[i].name + ' x' + objects[i].quantity + ' ' + objects[i].price * objects[i].quantity + '$' + '</li>');
        $('#' + objects[i].label).text(objects[i].quantity);

      }
      $('h2 span').text(totalPrice + '$');
    }

  }
});
///////////////////////////////////////////////////////////
//# on click of button cancel , the total price will be set to 0 ;
// all lists will be removed
// total price text will get updated

$('#cancel').on('click', function() {
  totalPrice = 0
  $('li').remove();
  $('h2 span').text(totalPrice + '$');
  $('.reset').text('--')
  $('input').val('');
  $('textarea').val('');

})

////////////////////////////////////////////////////////
//# on click of button coupon , the input of the coupon will be compared to an array of coupons
// once it matches , the coupon is deleted from array , and you will get 20% discount


var coupons = ['QWERTYUI', '12345678', 'asdfghjk', 'zxcvbnm0']

$('#coupon').on('click', function() {
  for (var i = 0; i < coupons.length; i++) {
    if ($('#enter-coupon').val() === coupons[i]) {
      totalPrice = totalPrice - (totalPrice * 0.2)
      coupons.splice(i, 1)
    }
  }
  $('h2 span').text(totalPrice + '$');
});

/////////////////////////////////////////////////////////
//# on click of submit order button , if total price is 0 , then you are getting an alert
// else ; you will get a confirmation message that has every item and details 
$('#submit').on('click', function() {
  if (totalPrice === 0) {
    alert('You did not order anything')
  } else {
    var array = $('li').text().split('$');
    var empty = [];
    for (var i = 0; i < array.length; i++) {

      empty.push(array[i] + ' $')
    }
    empty.pop();
    var str = empty.join('\n')

    confirm("Confirmation Message \n You address is : " + $('#address').val() + " \n Your number is : " + $('#number').val() +
      "\n You ordered : \n" + str + " \n"+'----------'+'\n' +"Your total is : " +totalPrice + "$");

    $('input').val('');
    $('textarea').val('');
  }
  totalPrice = 0
  $('.reset').text('--')
  $('li').text('')
  $('h2 span').text(totalPrice + '$');

})
/////////////////////////////////////////////////////////