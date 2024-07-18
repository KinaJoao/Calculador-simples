form = document.querySelector('form');
label = form.querySelector('label');
p = form.querySelector('p');
section = form.querySelector('section');
btnNumber = section.querySelectorAll('.divNumber');
btnClean = section.querySelector('.divClean');
btnIgual = section.querySelector('.divIgual');
historic = document.querySelector('.history');
//BY KINA JOÃO MUKUMBA
count = 0

button = document.querySelector('button')
button.onclick = () =>{
    historic.classList.toggle('show')
}

btnSimbol = section.querySelectorAll('.divDiv,' + '.divMult,' + '.divSub,' + '.divSom');
console.log(btnSimbol);
arrayNumber = [];
arraSimbol = [];

function fWriteNumber(e) {
    e = this.innerText;
    arrayNumber.push(e)
    label.innerText = arrayNumber.join('');
}

function fWriteSimbol(e) {
    arrayNumber = [];
    //pegar o 1º numero
    n1 = label.innerText;
    console.log(label.innerText);
    e = this.innerText;
    arraSimbol.push(e);
    //controle de repetição de sinais
    if (label.innerText == e) { label.innerText += e; }
    else { label.innerText = e; }
}

function fResultado() {
    count++
    n2 = label.innerText;
    sinal = arraSimbol.join('')
    
    span = document.createElement('span');
    span.style.color ='rgb(40, 54, 68)';
    span.style.padding = '3% 0'
    historic.appendChild(span)

    switch (sinal) {
        case '-':
            resuldaodo = parseInt(n1) - parseInt(n2);
            p.innerText = n1 + ' ' + sinal + ' ' + n2
            label.innerText = resuldaodo;
            span.innerText = count + ') '+ n1 + ' ' + sinal + ' ' + n2 + ' = '+ resuldaodo;
            arraSimbol = [];
            break;
        case '+':
            resuldaodo = parseInt(n1) + parseInt(n2);
            p.innerText = n1 + ' ' + sinal + ' ' + n2
            label.innerText = resuldaodo;
            span.innerText = count + ') '+ n1 + ' ' + sinal + ' ' + n2 + ' = '+ resuldaodo;
            arraSimbol = [];
            break;

        case '/':
            resuldaodo = parseInt(n1) / parseInt(n2);
            p.innerText = n1 + ' ' + sinal + ' ' + n2
            label.innerText = resuldaodo;
            span.innerText = count + ') '+ n1 + ' ' + sinal + ' ' + n2 + ' = '+ resuldaodo;
            arraSimbol = [];
            break;

        case '*':
            resuldaodo = parseInt(n1) * parseInt(n2);
            p.innerText = n1 + ' ' + sinal + ' ' + n2
            label.innerText = resuldaodo;
            span.innerText = count + ') '+ n1 + ' ' + sinal + ' ' + n2 + ' = '+ resuldaodo;
            arraSimbol = [];
            break;
        default:
            break;

    }
}
function fClean() {
    p.innerText = '';
    label.innerText = '';
    arrayNumber = [];
    arraSimbol = []
}


btnNumber.forEach((element) => {
    element.onclick = fWriteNumber;
});

btnClean.onclick = fClean;

btnSimbol.forEach((element) => {
    element.onclick = fWriteSimbol;
});

btnIgual.onclick = fResultado;