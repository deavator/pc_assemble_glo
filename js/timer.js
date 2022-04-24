function timer() {

    // === ПЕРЕМЕННЫЕ ===================
    const   daysBlock = document.querySelector('.timer__days'),
            hoursBlock = document.querySelector('.timer__hours'),
            minutesBlock = document.querySelector('.timer__minutes'),
            secondsBlock = document.querySelector('.timer__seconds'),
            timerItems = document.querySelectorAll('.timer__item');
    
    let interval;

    const   secArray =  ['секунда', 'секунды', 'секунд'],
            minArray =  ['минута', 'минуты', 'минут'],
            hourArray =  ['час', 'часа', 'часов'],
            dayArray =  ['день', 'дня', 'дней'];
    
    // Крайнее значение (фиксированное)
    // const DEADLINE = '2022-05-01';
    
    // Крайнее значение (автомат от текущей даты + 3 дня)
    const DEADLINE = `
        ${new Date().getFullYear()}-
        ${new Date().getMonth()+1}-
        ${new Date().getDate()+3}
    `;

    
    // === ФУНКЦИИ ===================
    // Вывод всегда двузначного числа
    function correctTime(time) {
        time = time < 10 ? "0" + time : time;
        return time;
    }

    // Меняет падеж подписи от числа
    function numWord(num, words) {
        // Защита от передачи отрицательных и больших чисел
        num = Math.abs(num) % 100;
        const lastNum = num % 10;

        // Проверки
        if (num >= 5 & num <= 20) {return words[2];}
        if (lastNum > 1 & lastNum < 5) {return words[1];}
        if (lastNum === 1) {return words[0];}
        return words[2];
    }

    // Вывод времени
    function getTime() {
        const date = new Date();

        const   hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

        hoursBlock.textContent = correctTime(hours);
        minutesBlock.textContent = correctTime(minutes);
        secondsBlock.textContent = correctTime(seconds);
    }

    // Вывод таймера
    function getTimer() {
        const   date = new Date().getTime(),
                deadline = new Date(DEADLINE).getTime();
        
        // Оставшеся общее время в сек.
        const timeRemain = (deadline - date) / 1000;
        
        const   secRemain = Math.floor(timeRemain % 60),
            minRemain = Math.floor((timeRemain / 60) % 60),
            hourRemain = Math.floor((timeRemain / 3600) % 24),
            dayRemain = Math.floor(timeRemain / 3600 / 24);
        
        if (timeRemain <= 0) {
            clearInterval(interval);
            
            // когда timeRemaining <= 0 закрашивать цифры таймера красным цветом
            timerItems.forEach(item => {
                item.style.color = 'red';
            });

            daysBlock.textContent = '00';
            hoursBlock.textContent = '00';
            minutesBlock.textContent = '00';
            secondsBlock.textContent = '00';
        } else {
            daysBlock.textContent = correctTime(dayRemain);
            hoursBlock.textContent = correctTime(hourRemain);
            minutesBlock.textContent = correctTime(minRemain);
            secondsBlock.textContent = correctTime(secRemain);
        }

        // меняем отображение подписей таймера в зависимости от числа
        daysBlock.nextElementSibling.textContent = numWord(+dayRemain, dayArray);
        hoursBlock.nextElementSibling.textContent = numWord(+hourRemain, hourArray);
        minutesBlock.nextElementSibling.textContent = numWord(+minRemain, minArray);
        secondsBlock.nextElementSibling.textContent = numWord(+secRemain, secArray);
    }
    
    // === ТЕЛО ПРОГРАММЫ =================

    // Хронометр
    // interval = setInterval(getTime, 500);
    
    // Таймер
    interval = setInterval(getTimer, 500);
    
}
timer();