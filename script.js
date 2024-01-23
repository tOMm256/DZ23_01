// Задача 1: Создайте кнопку с id btn1, которая при нажатии вызывает функцию func1. Функция func1 должна создать новый элемент div с текстом “Это div1” и добавить его в div1.
const btn1 = document.getElementById('btn1')
const div1 = document.getElementById('div1')

btn1.addEventListener('click', function func1() {
    div1.classList.toggle('active')
    console.log('click')
})


// Задача 2: Создайте кнопку с id btn2, которая при нажатии вызывает функцию func2. Функция func2 должна создать новый элемент p с текстом “Это p2” и добавить его в div2.
const btn2 = document.getElementById('btn2')
const p2 = document.getElementById('p2')

btn2.addEventListener('click', function func2() {
    p2.classList.toggle('active')
    console.log(click)
})


// Задача 3: Создайте кнопку с id btn3, которая при нажатии вызывает функцию func3. Функция func3 должна создать новый элемент img с альтернативным текстом “Это img3” и добавить его в div3.
const btn3 = document.getElementById('btn3')
const img3 = document.getElementById('img3')

btn3.addEventListener('click', function func3() {
    img3.classList.toggle('active')
    console.log(click)
})


// Задача 4: Создайте кнопку с id btn4, которая при нажатии вызывает функцию func4. Функция func4 должна создать новый элемент ul с текстом “Это ul4” и добавить его в div4.
const btn4 = document.getElementById('btn4')
const ul4 = document.getElementById('ul4')

btn4.addEventListener('click', function func4() {
    ul4.classList.toggle('active')
    console.log(click)
})


// Задача 5: Создайте кнопку с id btn5, которая при нажатии вызывает функцию func5. Функция func5 должна создать новый элемент li с текстом “Это li5” и добавить его в div5.
const btn5 = document.getElementById('btn5')
const li5 = document.getElementById('li5')

btn5.addEventListener('click', function func5() {
    li5.classList.toggle('active')
    console.log(click)
})


// Задача 6: Создайте кнопку с id btn6, которая при нажатии вызывает функцию func6. Функция func6 должна создать новый элемент table с текстом “Это table6” и добавить его в div6.
const btn6 = document.getElementById('btn6')

btn6.addEventListener('click', function func6() {
    let table = document.createElement("table");
    table.innerHTML = "Это table6";
    document.getElementById("div6").appendChild(table);
})


// Задача 7: Создайте кнопку с id btn7, которая при нажатии вызывает функцию func7. Функция func7 должна создать новый элемент tr с текстом “Это tr7” и добавить его в div7.
const btn7 = document.getElementById('btn7')

btn7.addEventListener('click', function func7() {
    let tr = document.createElement("tr");
    tr.innerHTML = "Это tr7";
    document.getElementById("div7").appendChild(tr);
})


// Задача 8: Создайте кнопку с id btn8, которая при нажатии вызывает функцию func8. Функция func8 должна создать новый элемент td с текстом “Это td8” и добавить его в div8.
const btn8 = document.getElementById('btn8')

btn8.addEventListener('click', function func8() {
    let td = document.createElement("td");
    td.innerHTML = "Это td8";
    document.getElementById("div8").appendChild(td);
})


// Задача 9: Создайте кнопку с id btn9, которая при нажатии вызывает функцию func9. Функция func9 должна создать новый элемент h1 с текстом “Это h19” и добавить его в div9.
const btn9 = document.getElementById('btn9')
const h19 = document.getElementById('h19')

btn9.addEventListener('click', function func9() {
    h19.classList.toggle('active')
    console.log(click)
})


// Задача 10: Создайте кнопку с id btn10, которая при нажатии вызывает функцию func10. Функция func10 должна создать новый элемент span с текстом “Это span10” и добавить его в div10. Результат залить на github”
const btn10 = document.getElementById('btn10')
const span10 = document.getElementById('span10')

btn10.addEventListener('click', function func10() {
    span10.classList.toggle('active')
    console.log(click)
})