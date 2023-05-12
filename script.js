let screen = document.querySelector(".screen");
let keys = document.querySelectorAll(".keys");
let numbers = document.querySelectorAll(".key");
let operator = document.querySelectorAll(".operator");
let equalto = document.querySelector("#equalTo");
let del = document.querySelector(".del");
let clear = document.querySelector(".clear");
let prescreen = document.querySelector(".prescreen");
let anscreen = document.querySelector(".anscreen");
let button = document.querySelectorAll("button");
let raise =document.querySelector(".raise")
let expression = ''

function numAppear(btn) {
    anscreen.innerHTML += btn.innerHTML;
    expression += String(btn.innerHTML);
    console.log(expression);
}

function handler(keyArr, keyFn) {
    keyArr.forEach(elem => {
        elem.addEventListener("click", () => {
            keyFn(elem);
        });
    }
    )
}

handler(numbers, numAppear);
handler(operator, operatorAppear);

function operatorAppear(arg) {
    if (anscreen.innerHTML.includes(arg.value)) return
    anscreen.innerHTML += arg.innerHTML;
    expression += String(arg.value);
    console.log(expression);
    prescreen.innerHTML = expression;
    anscreen.innerHTML = ''
}

function evaluate() {
    prescreen.innerHTML += anscreen.innerHTML;
    anscreen.innerHTML = eval(expression);

}

equalto.addEventListener('click', evaluate);


function deleter() {
        anscreen.innerHTML = '';
        prescreen.innerHTML = prescreen.innerHTML.slice(0,-1);
        expression = expression.slice(0,-1);
    }

del.addEventListener('click', deleter);


function disappear() {
    anscreen.innerHTML = '';
    prescreen.innerHTML = '';
    expression = '';
}
clear.addEventListener('click', disappear);


function square() {
expression = eval(expression);
expression = expression * expression;
anscreen.innerHTML = expression;
}
raise.addEventListener('click', square);


function toggleDarkMode() {
    var calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark');
}

