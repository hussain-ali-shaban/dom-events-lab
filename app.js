let firstN =null;
let secondN=null;
let operation =null;
let total;
//------------------------ Cached Element References ------------------------/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const show = document.querySelector('.display');
show.innerText=0;
//----------------------------- Event Listeners -----------------------------/
  calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    // Example
    if (event.target.classList.contains('number')) {
      if (firstN === null && operation === null && secondN === null){
        firstN=event.target.innerText;
        show.innerText = firstN
      }
      else if (firstN !== null && operation === null && secondN === null){
        if (firstN===total) firstN = event.target.innerText
        else firstN+=event.target.innerText;
        show.innerText = firstN
      }
      else if (firstN !== null && operation !== null && secondN === null){
        secondN=event.target.innerText;
        show.innerText = secondN
      }
      else if (firstN !== null && operation !== null && secondN !== null){
        secondN+=event.target.innerText;
        show.innerText = secondN
      }

      console.log("firstN = ", firstN, "secondN = ", secondN);
    }

    if (event.target.classList.contains('operator')) {

     if  (event.target.innerText === 'C') {
        show.innerText = 0;
        firstN = null;
        secondN = null;
        operation = null;
        console.log("Clear");

    } else {
        operation=event.target.innerText;
        console.log('selected operation '+ operation);

    }
  }
  if (event.target.innerText === '=') {


    firstN = firstN * 1
    secondN = secondN * 1

    if (operation === '+') {
      total = firstN + secondN;
    } else if (operation === '-') {
      total = firstN - secondN;
    } else if (operation === '*') {
      total = firstN * secondN;
    } else if (operation === '/') {
      total =  firstN / secondN ;
    }

      show.innerText=total;
      firstN=total;
      operation = null;
     secondN = null;
    }
  });