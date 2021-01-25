// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.


/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const fontsizecontrolRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
//console.dir(textRef);
//textRef.style.fontSize = '50px';
//fontsizecontrolRef.value = '100';
fontsizecontrolRef.addEventListener('input', event => {
textRef.style.fontSize = `${event.target.value}px`;
})