// Задача 1

document.addEventListener('DOMContentLoaded', function () {
   let count = 0;
   const button = document.getElementById('knopka');
   const skolko = document.getElementById('skolko');
   const itog = document.getElementById('itog');
   button.addEventListener('click', function () {
       count++;
       skolko.textContent = count;
       if (count >= 15) {
        button.disabled = true;
        itog.textContent = "А все";
       };
   });

});

// Задача 2

document.addEventListener('DOMContentLoaded', function () {
    let count = 5;
    const timer = document.getElementById('timer');
    const reset = document.getElementById('reset');
    let interval;

    function startTimer() {
      interval = setInterval(function () {
        count--;
        timer.textContent = count;

        if (count <= 0) {
          clearInterval(interval);
          timer.textContent = "Время вышло";
        }
      }, 1000);
    }

    reset.addEventListener('click', function () {
      clearInterval(interval);
      count = 5;
      timer.textContent = count;
      startTimer();
    });

    startTimer();
  });

// Задача 3
document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let interval;
    const display = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    start.addEventListener('click', function () {
      if (!interval) {
        interval = setInterval(function () {
          count++;
          display.textContent = count;
        }, 100);
      }
    });

    stop.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
    });

    reset.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
      count = 0;
      display.textContent = count;
    });
  });