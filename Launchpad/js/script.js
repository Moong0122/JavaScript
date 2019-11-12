var mainAudio = new Audio("audio/loop.mp3");
var audio = [new Audio("audio/01_kick_drum.wav"), new Audio("audio/02_closed_hihat.wav"), new Audio("audio/03_open_hihat.wav"), new Audio("audio/04_clap.wav"), new Audio("audio/05_snap.wav"), new Audio("audio/06_crash.wav"), new Audio("audio/07_tom1.wav"), new Audio("audio/08_tom2.wav"), new Audio("audio/09_tambourine.wav")];


$('#play-btn').on('click',function() {
  mainAudio.play();
});

$('#stop-btn').on('click',function() {
  mainAudio.pause();
  mainAudio.currentTime = 0;
});

$(document).on('keydown',function(event){
  $('#cell'+event.key).addClass('playing');
  audio[event.key-1].play();
  audio[event.key-1].currentTime = 0;
});

$(document).on('keyup',function() {
  $('.cell').removeClass('playing');
})