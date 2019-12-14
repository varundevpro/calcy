var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;

var input = document.querySelector('.screen p');
var inputVal = input.textContent;
var btnVal = this.textContent;
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = clicked;
}
document.addEventListener('keydown', listenkeys);

function listenkeys(e){
  hl(e.key);

  if (e.code.indexOf("Numpad") == 0){
    if (e.key == "Enter")
      return clicked(e,"=");
    clicked(e,e.key);
  }else if (!isNaN(+e.key)) {
    clicked(e,e.key);
  }else if (e.key == "+" || e.key == "-" || e.key == "=" || e.key == "/" || e.key == ".") {
    clicked(e,e.key);
  }else if (e.key == "Backspace") {
   clearOne();
  }else if (e.key == "C" || e.key == "c") {
    cls();
  }else if (e.key == "Enter") {
    clicked(e,"=");
  }
}

document.querySelector(".backspace").onclick = clearOne;

function clearOne() {
  input = document.querySelector('.screen p');
  inputVal = input.textContent;
  arr = inputVal.split('');
  arr.pop();
  input.textContent = arr.join('');
}

function clicked(e,key) {
    input = document.querySelector('.screen p');
    inputVal = input.textContent;
    btnVal = key || this.textContent;

    if(btnVal == 'C')
      cls();

    else if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      if(operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');

      if(equation)
        input.textContent = eval(equation);

      decimalAdded = false;
    }



    else if(operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];

      if(inputVal != '' && operators.indexOf(lastChar) == -1)
        input.textContent += btnVal;

      else if(inputVal == '' && btnVal == '-')
        input.textContent += btnVal;

      if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.textContent = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded =false;
    }

    else if(btnVal == '.') {
      if(!decimalAdded) {
        input.textContent += btnVal;
        decimalAdded = true;
      }
    }

    else {
      input.textContent += btnVal;
    }
    if ((btnVal != '+') && (btnVal != '0') && (btnVal != '-')) {
      e.preventDefault();
    }
  var $0 = document.querySelector(".screen p");
  $0.scrollTo( $0.scrollWidth,0);

  }

function cls() {
  input.textContent = '';
  decimalAdded = false;
}

function hl(key) {
  var h = document.querySelector(`span[data-key="${key}"]`);
  if (h){
    h.classList.add('active');
    setTimeout(() => {
      h.classList.remove('active');
    }, 200);
  }
}