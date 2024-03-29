window.addEventListener('DOMContentLoaded', function() {

    'use strict';

// TIMER

let deadline = '2019-09-21';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date() ),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60) % 24),
        days = Math.floor(t/1000/60/60/24);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
}  // end of getTimeRemaining
  
function setClock(id, endtime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if( t.total <= 0 ) {
                clearInterval(timeInterval);
            }
        }
} // end of setClock

setClock('timer', deadline);

});