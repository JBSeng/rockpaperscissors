// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
    let inputVal=$('#input').val()
    $("#userChoice").text(inputVal)

    let cpuChoice = Math.random();
    if (cpuChoice > .66) {
        $('#computerChoice').text('rock');
    }
    else if (cpuChoice > .33 && cpuChoice < .66){
        $('#computerChoice').text('paper');
    }
    else if (cpuChoice > 0 && cpuChoice < .33) {
        $('#computerChoice').text('scissor');
    }

    if (inputVal === 'rock' && cpuChoice === 'scissor') {
        $('#result').text('You win');
    }
    else if (inputVal ===  'rock' && cpuChoice === 'paper') {
        $('#result').text('You Lose');
    }
    else if (inputVal === 'rock' && cpuChoice === 'rock'){
        $('#result').text('You Tied');
    }
    else if (inputVal ===  'paper' && cpuChoice === 'rock') {
        $('#result').text('You Win');
    }
     else if (inputVal ===  'paper' && cpuChoice === 'paper') {
        $('#result').text('You Tied');
    }
     else if (inputVal ===  'paper' && cpuChoice === 'scissor') {
        $('#result').text('You Win');
    }
     else if (inputVal ===  'scissor' && cpuChoice === 'paper') {
        $('#result').text('You Win');
    }
     else if (inputVal ===  'scissor' && cpuChoice === 'rock') {
        $('#result').text('You Lose');
    }
     else if (inputVal ===  'scissor' && cpuChoice === 'scissor') {
        $('#result').text('You Tied');
    }

});




// DOCUMENT READY FUNCTION BELOW

