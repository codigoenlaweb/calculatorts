//  querySelector
//  screen
var screentop = document.querySelector('#screen');
var screenUnder = document.querySelector('#screenunder');
// number {0-9}
var nmr1 = document.querySelector('#nmr1');
var nmr2 = document.querySelector('#nmr2');
var nmr3 = document.querySelector('#nmr3');
var nmr4 = document.querySelector('#nmr4');
var nmr5 = document.querySelector('#nmr5');
var nmr6 = document.querySelector('#nmr6');
var nmr7 = document.querySelector('#nmr7');
var nmr8 = document.querySelector('#nmr8');
var nmr9 = document.querySelector('#nmr9');
var nmr0 = document.querySelector('#nmr0');
//  operator {+, -, *, /, .}
var sum = document.querySelector('#sum');
var subt = document.querySelector('#subt');
var mult = document.querySelector('#mult');
var division = document.querySelector('#division');
var point = document.querySelector('#point');
//  Applications {=, Del, C}
var equal = document.querySelector('#equal');
var buttonC = document.querySelector('#C');
var buttonDel = document.querySelector('#del');
//  END querySelector
//  variables 
var number;
var valueOld;
var valueCurrent;
//  fuction
//  uiScreen
function uiScreen(operatortype) {
    screentop.value = "";
    screenUnder.textContent = "" + number + operatortype;
}
//  uiScreen for result
function uiScreenResult() {
    screentop.value = "";
    screenUnder.textContent = "" + number;
}
// what is the typeoperator?
function operatortype() {
    return screenUnder.textContent[screenUnder.textContent.length - 1];
}
// 
function equaloperator() {
    if (operatortype() == '+') {
        number += Number(screentop.value);
        uiScreenResult();
    }
    if (operatortype() == '-') {
        number -= Number(screentop.value);
        uiScreenResult();
    }
    if (operatortype() == 'x') {
        number *= Number(screentop.value);
        uiScreenResult();
    }
    if (operatortype() == '/') {
        number /= Number(screentop.value);
        uiScreenResult();
    }
}
// number fuction {0-9}
var nmr1f = function () {
    screentop.value = screentop.value + "1";
};
var nmr2f = function () {
    screentop.value = screentop.value + "2";
};
var nmr3f = function () {
    screentop.value = screentop.value + "3";
};
var nmr4f = function () {
    screentop.value = screentop.value + "4";
};
var nmr5f = function () {
    screentop.value = screentop.value + "5";
};
var nmr6f = function () {
    screentop.value = screentop.value + "6";
};
var nmr7f = function () {
    screentop.value = screentop.value + "7";
};
var nmr8f = function () {
    screentop.value = screentop.value + "8";
};
var nmr9f = function () {
    screentop.value = screentop.value + "9";
};
var nmr0f = function () {
    screentop.value = screentop.value + "0";
};
//  operator fuction {+, -, *, /, .}
var sumf = function () {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('+');
    }
    else if (screentop.value == '') {
        screenUnder.textContent = number + "+";
    }
    else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/") {
        equaloperator();
        screenUnder.textContent = number + "+";
    }
    else {
        number += Number(screentop.value);
        uiScreen('+');
    }
};
var subtf = function () {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('-');
    }
    else if (screentop.value == '') {
        screenUnder.textContent = number + "-";
    }
    else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/") {
        equaloperator();
        screenUnder.textContent = number + "-";
    }
    else {
        number -= Number(screentop.value);
        uiScreen('-');
    }
};
var multf = function () {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('x');
    }
    else if (screentop.value == '') {
        screenUnder.textContent = number + "x";
    }
    else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/") {
        equaloperator();
        screenUnder.textContent = number + "x";
    }
    else {
        number *= Number(screentop.value);
        uiScreen('x');
    }
};
var divisionf = function () {
    if (!number) {
        console.log(screentop.value);
        number = Number(screentop.value);
        uiScreen('/');
    }
    else if (screentop.value == '') {
        screenUnder.textContent = number + "/";
    }
    else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/") {
        equaloperator();
        screenUnder.textContent = number + "/";
    }
    else {
        number /= Number(screentop.value);
        uiScreen('/');
    }
};
var pointf = function () {
    if (screentop.value == '') {
        screentop.value = "0.";
    }
    else {
        screentop.value = screentop.value + ".";
    }
};
var result;
var equalf = function () {
    equaloperator();
};
var zap = function () {
    screentop.value = '';
    screenUnder.textContent = '';
    number = 0;
};
var del = function () {
    valueOld = String(screentop.value);
    valueOld = valueOld.substring(0, valueOld.length - 1);
    valueCurrent = Number(valueOld);
    if (valueOld.length === 0) {
        screentop.value = "";
    }
    else {
        screentop.value = "" + valueCurrent;
    }
};
//  END fuction
//  addEventlistener
// number {0-9}
nmr1.addEventListener('click', nmr1f);
nmr2.addEventListener('click', nmr2f);
nmr3.addEventListener('click', nmr3f);
nmr4.addEventListener('click', nmr4f);
nmr5.addEventListener('click', nmr5f);
nmr6.addEventListener('click', nmr6f);
nmr7.addEventListener('click', nmr7f);
nmr8.addEventListener('click', nmr8f);
nmr9.addEventListener('click', nmr9f);
nmr0.addEventListener('click', nmr0f);
//  operator {+, -, *, /, .}
sum.addEventListener('click', sumf);
subt.addEventListener('click', subtf);
mult.addEventListener('click', multf);
division.addEventListener('click', divisionf);
point.addEventListener('click', pointf);
equal.addEventListener('click', equalf);
buttonC.addEventListener('click', zap);
buttonDel.addEventListener('click', del);
