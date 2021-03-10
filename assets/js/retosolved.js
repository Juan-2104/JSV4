// Variables globales
let letras = document.getElementById("letras");
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnD10 = document.getElementById("btnD10");
let letrasTemp = "";
let numerosTemp = "";

// Logica
const logicaA1 = () => {
  if (letrasTemp === "A"|| numerosTemp === "1") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "") {
      letras.innerHTML = "A";
      letrasTemp = "A";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "") {
            numeros.innerHTML = "1";
            numerosTemp = "1"
        } else {
            
        }
    }
  }

};

const logicaB2 = () => {
  if (letrasTemp === "B"|| numerosTemp === "12") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "A") {
      letras.innerHTML = letrasTemp + "B";
      letrasTemp = "AB";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1") {
            numeros.innerHTML = numerosTemp + "2";
            numerosTemp = "12"
        } else {
            
        }
    }
  }
}

const logicaC3 = () => {
  if (letrasTemp === "ABC" || numerosTemp === "123") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "AB") {
      letras.innerHTML = letrasTemp + "C";
      letrasTemp = "ABC";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "12") {
            numeros.innerHTML = numerosTemp + "3";
            numerosTemp = "123"
        } else {
            
        }
    }
  }
}

const logicaD4 = () => {
  if (letrasTemp === "ABCD"|| numerosTemp === "1234") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABC") {
      letras.innerHTML = letrasTemp + "D";
      letrasTemp = "ABCD";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "123") {
            numeros.innerHTML = numerosTemp + "4";
            numerosTemp = "1234"
        } else {
            
        }
    }
  }
}

const logicaE5 = () => {
  if (letrasTemp === "ABCDE"|| numerosTemp === "12345") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABCD") {
      letras.innerHTML = letrasTemp + "E";
      letrasTemp = "ABCDE";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1234") {
            numeros.innerHTML = numerosTemp + "5";
            numerosTemp = "12345"
        } else {
            
        }
    }
  }
}
const logicaF6 = () => {
  if (letrasTemp === "ABCDEF"|| numerosTemp === "123456") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABCDE") {
      letras.innerHTML = letrasTemp + "F";
      letrasTemp = "ABCDEF";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "12345") {
            numeros.innerHTML = numerosTemp + "6";
            numerosTemp = "123456"
        } else {
            
        }
    }
  }
}

const logicaG7 = () => {
  if (letrasTemp === "ABCDEFG"|| numerosTemp === "1234567") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABCDEF") {
      letras.innerHTML = letrasTemp + "G";
      letrasTemp = "ABCDEFG";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "123456") {
            numeros.innerHTML = numerosTemp + "7";
            numerosTemp = "1234567"
        } else {
            
        }
    }
  }
}

const logicaH8 = () => {
  if (letrasTemp === "ABCDEFGH"|| numerosTemp === "12345678") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABCDEFG") {
      letras.innerHTML = letrasTemp + "H";
      letrasTemp = "ABCDEFGH";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "1234567") {
            numeros.innerHTML = numerosTemp + "8";
            numerosTemp = "12345678"
        } else {
            
        }
    }
  }
}

const logicaI9 = () => {
  if (letrasTemp === "ABCDEFGHI"|| numerosTemp === "123456789") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABCDEFGH") {
      letras.innerHTML = letrasTemp + "I";
      letrasTemp = "ABCDEFGHI";
    } else {
        if (letrasTemp === "ABCDEFGHIJ" && numerosTemp === "12345678") {
            numeros.innerHTML = numerosTemp + "9";
            numerosTemp = "123456789"
        } else {
            
        }
    }
  }
}

const logicaJ10 = () => {
  if (letrasTemp === "ABCDEFGHIJ."|| numerosTemp === "1234567890") {
    alert("Ya está!!");
  } else {
    if (letrasTemp === "ABCDEFGHI") {
      letras.innerHTML = letrasTemp + "J.";
      letrasTemp = "ABCDEFGHIJ";
    } else {
        if (numerosTemp === "123456789") {
            numeros.innerHTML = numerosTemp + "0";
            numerosTemp = "1234567890"
        } else {
            
        }
    }
  }
}

// Onclick
btnA1.onclick = function () {
  logicaA1();
};

btnB2.onclick = function () {
  logicaB2();
};

btnC3.onclick = function () {
  logicaC3();
};
btnD4.onclick = function () {
  logicaD4();
};
btnE5.onclick = function () {
  logicaE5();
};
btnF6.onclick = function () {
  logicaF6();
};
btnG7.onclick = function () {
  logicaG7();
};
btnH8.onclick = function () {
  logicaH8();
};
btnI9.onclick = function () {
  logicaI9();
};
btnJ10.onclick = function () {
  logicaJ10();
};

