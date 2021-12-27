
    var seconds = 00;
    var tens = 00;
    var minutes = 00;
    var hours = 00;
    var appendHours = document.getElementById('hours');
    var appendMinutes = document.getElementById('minutes')
    var appendSeconds = document.getElementById('seconds');
    var appendTens = document.getElementById('tens');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;


buttonStart.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    clearInterval(interval);
    hours = "00";
    minutes = "00";
    tens = "00";
    seconds = "00";

    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;

}

function startTimer(){
    tens++;

    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        appendTens.innerHTML = tens;
    }

    if(tens > 59){
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
 
    if (seconds > 59) {
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    } 

    if (minutes >= 10){
        appendMinutes.innerHTML = minutes;
    }
   
    if(minutes > 59){
        console.log('hours');
        hours++
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
    }

    if (hours >= 10){
        appendHours.innerHTML = hours;
    }

}