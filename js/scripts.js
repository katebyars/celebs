$(document).ready(function()  {

  $("#formOne").change(function(event) {

    var number = $("#number").val();
    parseInt(number);

    if (number<=3){
      $('#formTwo').show();
      $('#formThree').hide();
      $('#formFour').hide();
    } else if (number == 4) {
      $('#formThree').show();
      $('#formTwo').hide();
      $('#formFour').hide();
    } else {
      $('#formFour').show();
      $('#formThree').hide();
      $('#formTwo').hide();
    }
  //  } else if (number > 3 < 7) {
  //     ("#shapes").show();
  });
});
