$('#btn1').on('click',pressOne);
$('#btn2').on('click',pressTwo);
$('#btn3').on('click',pressThree);

function pressOne() {
	$('.blue').addClass('down');
	setTimeout(upbtn,1000);
}

function pressTwo() {
	$('.white').addClass('down');
	setTimeout(upbtn,1000);
}

function pressThree() {
	$('.blue.dot').addClass('down');
	setTimeout(upbtn,1000);	
}

function upbtn() {
	$('.flag').removeClass('down');
}