/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstN =null;
let secondN=null;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const show = document.querySelector('.display');
show.innerText=0;
const handleOperatorClick = (event) => {
    firstN = show.innerText;
calculator = event.target.id;
    show.innerText = 0;
  };
  const handleEqualBtnClick = () => {
    secondN = totalDisplay.innerText;
  };
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        show.innerText= shows(show.innerText+ event.target.innerText);
  
     
    });
  });
  calculator.addEventListener('click', (event) => {
    
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {

      // Do something with a number
 show.innerText===('number');
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
      let total = firstN*=secondN
      show.innerText =total;
    }
   else if (event.target.innerText === '/') {
        // Do something with this operator
        let total = firstN/=secondN
        show.innerText =total;
      }
    else  if (event.target.innerText === '+') {
        let total = firstN+=secondN;
        show.innerText =total;
        // Do something with this operator
        
      }
      if (event.target.innerText === 'C') {
        // Do something with this operator
        total=0;
        total=show.innerText;
        
      }
      if (event.target.innerText === '-') {
        // Do something with this operator
        let total = firstN-=secondN
        show.innerText =total;
      }
  });
  calculator.forEach((operator) => {
    operator.addEventListener('click', handleOperatorClick);
  });
  

/*-------------------------------- Functions --------------------------------*/
