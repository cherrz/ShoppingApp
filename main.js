// localStorage.setItem('Zadanie', 'Przykładowa wartość');
// console.log(localStorage.getItem("Zadanie"));

const addTaskButton = document.querySelector('button.addTaskButton');
const inputValue = document.querySelector('input.entryTask');

console.log(inputValue);

addTaskButton.addEventListener('click', function(){
    console.log(inputValue.value); 
})