/* ======= Logica de la calculadora ======= */

let pantalla = document.getElementById("pantalla");
let expresion = "0";

// Dibuja la expresion actual en la pantalla
function actualizarPantalla() {
  pantalla.value = expresion;
}

// Agrega un numero o punto decimal
function agregarNumero(num) {
  if (expresion === "0") {
    expresion = num === "." ? "0." : num;
  } else if (num === "." && /\.$/.test(expresion)) {
    // Evita puntos decimales repetidos al final
  } else {
    expresion += num;
  }
  actualizarPantalla();
}

// Agrega un operador (+, -, *, /)
function agregarOperador(op) {
  if (/[+\-*/]$/.test(expresion)) {
    // Reemplaza el operador si ya hay uno al final
    expresion = expresion.slice(0, -1) + op;
  } else {
    expresion += op;
  }
  actualizarPantalla();
}

// Limpia toda la pantalla
function limpiar() {
  expresion = "0";
  actualizarPantalla();
}

// Borra el ultimo caracter
function borrar() {
  expresion = expresion.length > 1 ? expresion.slice(0, -1) : "0";
  actualizarPantalla();
}

// Evalua la expresion y muestra el resultado
function calcular() {
  try {
    expresion = String(eval(expresion));
  } catch (e) {
    expresion = "Error";
  }
  actualizarPantalla();
}

/* ======= Funciones de memoria (rama feature/memoria) ======= */

let memoria = 0;

// Borra el valor guardado en memoria
function memoriaLimpiar() {
  memoria = 0;
}

// Recupera el valor guardado y lo muestra en pantalla
function memoriaRecuperar() {
  expresion = String(memoria);
  actualizarPantalla();
}

// Suma el valor de la pantalla a la memoria
function memoriaSumar() {
  memoria += parseFloat(expresion) || 0;
}

// Resta el valor de la pantalla de la memoria
function memoriaRestar() {
  memoria -= parseFloat(expresion) || 0;
}