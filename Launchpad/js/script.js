var mainAudio = new Audio("audio/loop.mp3");
var audio1 = new Audio("audio/01_kick_drum.wav");
var audio2 = new Audio("audio/02_closed_hihat.wav");
var audio3 = new Audio("audio/03_open_hihat.wav");
var audio4 = new Audio("audio/04_clap.wav");
var audio5 = new Audio("audio/05_snap.wav");
var audio6 = new Audio("audio/06_crash.wav");
var audio7 = new Audio("audio/07_tom1.wav");
var audio8 = new Audio("audio/08_tom2.wav");
var audio9 = new Audio("audio/09_tambourine.wav");

function playMusic() {
  mainAudio.play();
}
function stopMusic() {
  mainAudio.pause();
  mainAudio.currentTime = 0;
}
$('#play-btn').on('click',playMusic);
$('#stop-btn').on('click',stopMusic);

$(document).on('keypress',processKeyEvent);
$(document).on('keyup',keyboardup);

function processKeyEvent(event) {
  // 연속해서 소리가 나오게 하기 위해 currentTime = 0 추가!
  if(event.key == 1){
    $('#cell1').addClass('playing');
    audio1.play();
    audio1.currentTime = 0;
    // $('#cell1').removeClass('playing');
    }
  else if(event.key == 2){
    $('#cell2').addClass('playing');
    audio2.play();
    audio2.currentTime = 0;
  }  
  else if(event.key == 3){
    $('#cell3').addClass('playing');
    audio3.play();
    audio3.currentTime = 0;
  }
  else if(event.key == 4){
    $('#cell4').addClass('playing');
    audio4.play();
    audio4.currentTime = 0;
  }
  else if(event.key == 5){
    $('#cell5').addClass('playing');
    audio5.play();
    audio5.currentTime = 0;
  }
  else if(event.key == 6){
    $('#cell6').addClass('playing');
    audio6.play();
    audio6.currentTime = 0;
  }
  else if(event.key == 7){
    $('#cell7').addClass('playing');
    audio7.play();
    audio7.currentTime = 0;
  }
  else if(event.key == 8){
    $('#cell8').addClass('playing');
    audio8.play();
    audio8.currentTime = 0;
  }
  else if(event.key == 9){
    $('#cell9').addClass('playing');
    audio9.play();
    audio9.currentTime = 0;
  }
}

function keyboardup(){
  $('#cell1').removeClass('playing');
  $('#cell2').removeClass('playing');
  $('#cell3').removeClass('playing');
  $('#cell4').removeClass('playing');
  $('#cell5').removeClass('playing');
  $('#cell6').removeClass('playing');
  $('#cell7').removeClass('playing');
  $('#cell8').removeClass('playing');
  $('#cell9').removeClass('playing');
}