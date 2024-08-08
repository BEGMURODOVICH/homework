const display1 = document.getElementById('display-one');
const display2 = document.getElementById('display-two');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const operator = document.getElementById('operator');
const js = document.getElementById('img-js');

window.alert("You are ready ?");

js.onclick = function() {
    window.alert("👩‍💻 ABS DEVELOPER 💻");
}
operator.onclick = function() {
    display1.textContent = "Welcome !";
    display2.textContent = "Select Numbers";
}
one.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");

    let y = -(8 / 2) * (Math.pow(a, 2) + Math.pow(b, 2));
    display1.textContent = "№2 | Your Answer";
    display2.textContent = y;
}
two.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");
    let d = +prompt("D ni kiriting");

    let y = Math.pow(((a + b) / (c + d)), 2) + Math.pow(b, 2);
    display1.textContent = "№2 | Your Answer";
    display2.textContent = y;
}
three.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");
    let d = +prompt("D ni kiriting");

    let y = 2 * (Math.pow(a, -d) + ((4 * Math.pow(c, 2)) / 3));
    display1.textContent = "№3 | Your Answer";
    display2.textContent = y;
}
four.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");
    let d = +prompt("D ni kiriting");

    let y = (1 / Math.pow(a, 2)) * Math.pow((b / 10), 3) * Math.pow(c + d, 2);
    display1.textContent = "№4 | Your Answer";
    display2.textContent = y;
}
five.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");
    let d = +prompt("D ni kiriting");

    let y = Math.pow((((a / b) - 1) / (c / (d - 1))), 2);
    display1.textContent = "№5 | Your Answer";
    display2.textContent = y;
}
six.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");
    let d = +prompt("D ni kiriting");

    let y = (a + b) / c + (d / (a + c));
    display1.textContent = "№6 | Your Answer";
    display2.textContent = y;
}
seven.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");

    let y = Math.sqrt(Math.pow(a + b + c, 2) - Math.pow(a - b - c, 2));
    display1.textContent = "№7 | Your Answer";
    display2.textContent = y;
}
eight.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");

    let y = (
        Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
    ) / (a * b * c);
    display1.textContent = "№8 | Your Answer";
    display2.textContent = y;
}
nine.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");

    let y = a * (Math.pow(d, 3) / 3) + b * (Math.pow(c, 2) / 2);
    display1.textContent = "№9 | Your Answer";
    display2.textContent = y;
}
nine.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");
    let d = +prompt("D ni kiriting");

    let y = a * (Math.pow(d, 3) / 3) + b * (Math.pow(c, 2) / 2);
    display1.textContent = "№9 | Your Answer";
    display2.textContent = y;
}
ten.onclick = function() {
    let a = +prompt("A ni kiriting");
    let b = +prompt("B ni kiriting");
    let c = +prompt("C ni kiriting");

    let y = Math.abs((a / b) - (b / c)) + Math.pow(a + c, 1 / 4);
    display1.textContent = "№10 | Your Answer";
    display2.textContent = y;
}