// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию
// в список ul.ingredients.
// Для создания DOM - узлов используй 
// document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
 const ingredientsRef = document.querySelector('#ingredients');
// const liRef = document.createElement('li');
// liRef.textContent = 'Картошка';
// //console.log(liRef);
// ingredientsRef.appendChild(liRef);
// ingredients.map(ingredient => {
//   const liRef = document.createElement('li');
//   liRef.textContent = ingredient;
// ingredientsRef.appendChild(liRef);

// })

const createIngredient = (ingredient) => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  return liRef;
};
const arr = ingredients.map(item => createIngredient(item))
//console.log(...arr);
ingredientsRef.append(...arr);



