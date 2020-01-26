var date, hours, minutes, seconds, color, clock;

function dgclock(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    // if( date <= 9){
    //     date = '0' + date;
    // }

if( hours <= 9){
    hours = '0' + hours;
}

if( minutes <= 9){
    minutes = '0' + minutes;
}

if(seconds <= 9){
    seconds = '0' + seconds;
}

// clock = date +" : "+hours +" : "+ minutes+" : "+ seconds;

clock = hours +" : "+ minutes+" : "+ seconds;
color = "#"+ hours + minutes + seconds;

document.getElementById("clock").innerHTML = clock;
document.body.style.background = color;

setTimeout(dgclock, 1000);
}

dgclock();