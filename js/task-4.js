// Счетчик состоит из спана и кнопок,
//   которые должны увеличивать и уменьшать значение
// счетчика на 1.

// Создай переменную counterValue в которой
// будет хранится текущее значение счетчика.
// Создай функции increment и decrement
// для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
//   вызовы функций и обновление интерфейса

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
console.dir(decrementBtnRef);
const incrementBtnRef = document.querySelector('[data-action="increment"]');
console.dir(incrementBtnRef);
const valueRef = document.querySelector('#value');
console.log(valueRef);
let counterValue = 0;

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
} 
//console.log(valueRef.textContent);
//increment();
// increment();
// increment();
incrementBtnRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
} 
decrementBtnRef.addEventListener('click', decrement);
//доробити