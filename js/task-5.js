// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
const changedText = (event) => {
  if (event.target.value.length > 0) {
    outputRef.textContent = event.target.value;
  } else outputRef.textContent = "незнакомец";
};

inputRef.addEventListener("input", changedText);