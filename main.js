const heading = document.querySelector('#mainHeading');
const button = document.querySelector('#changeTextButton');
const output = document.querySelector('#output');

button.addEventListener('click', function(){
    heading.textContent = 'Новый текст';
})

output.innerHTML = 'Пример текста в блоке вывода';

setTimeout(function(){
    heading.textContent = 'Текст изменен с использованием setTimeout';
}, 2000);

//3
let a = 0;
setInterval(function(){
    a++
    output.innerHTML= a
}, 1000);

//1

setTimeout(function(){
    heading.style.visibility = 'hidden'; // Сначала скрываем заголовок
    setTimeout(function() {
        heading.style.visibility = 'visible'; // Показываем заголовок через еще 1 секунду
    }, 1000);
}, 1000);

setInterval(function(){
    const randomColor = getRandomColor(); // Получаем случайный цвет
    output.style.backgroundColor = randomColor; // Устанавливаем цвет фона
}, 2000);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//2
const fadingElement = document.getElementById('mainHeading');

let opacity = 1;

const fadeOutInterval = setInterval(function() {
    opacity -= 0.1; 
    fadingElement.style.opacity = opacity;

    if (opacity <= 0) {
        clearInterval(fadeOutInterval); 
    }
}, 100); 

//4
//даже chat gpt не помог