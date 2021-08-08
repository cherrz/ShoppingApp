// localStorage.setItem('Zadanie', 'Przykładowa wartość');
// console.log(localStorage.getItem("Zadanie"));

const addTaskButton = document.querySelector('button.addTaskButton');
const inputValue = document.querySelector('input.entryTask');
const ultoDoList = document.querySelector('ul.todolist');
const toDoArray = [];

// localStorage.clear();

addTaskButton.addEventListener('click', function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    const checkedIcon = document.createElement('i');
    checkedIcon.classList.add('icon-ok-outline');
    if (inputValue.value !== '') {
        const task = inputValue.value;
        li.innerHTML = task;
        toDoArray.push(task)
        saveToLocalStorage(toDoArray);
        inputValue.value = '';
        ultoDoList.appendChild(li);
        li.appendChild(checkedIcon);
        checkedIcon.addEventListener('click', function () {
            checkedIcon.parentElement.style.textDecoration = 'line-through';
            checkedIcon.remove();
        })
    } else {
        alert('Nie wpisałeś nazwy produktu!');
    }
});

function saveToLocalStorage(toDoArray){
    localStorage.setItem('ToDo', toDoArray);
    console.log(localStorage.getItem('toDo'));
}

