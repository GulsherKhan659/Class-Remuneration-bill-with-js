$(document).ready(function () {
	demo();
	demo1();
});
$(document).ready(function () {
	demo1();
});

function demo(){
	$('#Selectdata').change(function(){
debugger;
	if ($('#Selectdata').val()=='1') {

		$('.op1').css({ "display": "block" })
	}
	if($('#Selectdata').val()=='2'){
		$('.op2').css({ "display": "block" })
	}
	if($('#Selectdata').val()=='3') {
		$('.op3').css({ "display": "block" })
	}
else{
	$('').css({ "display": "block" })
}
})
};

function demo1(){
	$('#Selectdata1').change(function(){
debugger;
	if ($('#Selectdata1').val()=='11') {

		$('.op11').css({ "display": "block" })
	}
	if($('#Selectdata1').val()=='22'){
		$('.op22').css({ "display": "block" })
	}
else{
	$('').css({ "display": "block" })
}
})
};
	
		
