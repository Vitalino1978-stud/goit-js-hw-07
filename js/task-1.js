//Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).
//Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
const listsRef = document.querySelectorAll('.item');
//console.log(listsRef);
console.log(`У списку ${listsRef.length} категорії`);
const categoriesRef = document.querySelector('#categories');
//console.log(categoriesRef);
//const titleRef = categoriesRef.querySelector('h2');
//console.log(titleRef.textContent);
//const ulRef = categoriesRef.querySelector('ul');
//console.log(ulRef.children.length);
//console.log(`Категория: ${titleRef.textContent}`);
//console.log(`Количество элементов: ${ulRef.children.length}`);

//console.log(categoriesRef.children); 
//const arr = Array.from(categoriesRef.children);
//const arr = [...categoriesRef.children];
//console.log(arr);
[...categoriesRef.children].map(category => {
  const titleRef = category.querySelector('h2');
  console.log(`Категория: ${titleRef.textContent}`);
  const ulRef = category.querySelector('ul');
  console.log(`Количество элементов: ${ulRef.children.length}`);

})