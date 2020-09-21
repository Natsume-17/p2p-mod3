// ** Funciones generales ** //
const vaciar = () => {
    document.getElementById("pantalla").value = "";
}

const rellenar_info = () => { // actualiza el h2 según el resultado de la operación
    let info = document.getElementById("info"); // almacena h2 en info
    let res = document.getElementById("pantalla"); // almacena input en res
    if (res.value < 100) { // compara el valor de input; valores menores a 100
        info.innerHTML = "Info: el resultado es menor que 100"; // cambia el texto de info 
    } else if ((res.value >= 100) && (res.value <= 200)) { // compara valores entre 100 y 200
        info.innerHTML = "Info: el resultado está entre 100 y 200";
    } else { // para el resto de valores
        info.innerHTML = "Info: el resultado es superior a 200";
    }
}
// ** Operaciones unitarias ** //
const cuadrado = () => {
    let num = document.getElementById("pantalla");
    num.value *= num.value;
    rellenar_info();
}

const mod = () => { // calcula el módulo de un número
    let num = document.getElementById("pantalla");
    if (num.value < 0) {
        num.value = -num.value;
    } else {
        num.value = num.value;
    }
    rellenar_info();
}

const fact = () => { // calcula el factorial de un número
    let num = document.getElementById("pantalla");
    if (num.value <= 0) {
        alert("Introduce un número positivo.");
    } else {
        for (let i = num.value - 1; i > 0; i--) {
            num.value *= i;
        }
        rellenar_info();
    }
}
// ** Operaciones binarias ** //
let num, acu;
let op;
const init = () => { // inicializa las variables globales
    num = document.getElementById("pantalla");
    acu = num.value;
    op = "";
}
const add = () => { // función suma
    init();
    op = "+";
}
const sub = () => { // función resta
    init();
    op = "-";
}
const mul = () => { // función multiplicación
    init();
    op = "*";
}
const div = () => { // función división
    init();
    op = "/";
}
const rem = () => { // función resto de una división
    init();
    op = "%";
}
const pow = () => { // función potencia
    init();
    op = "x_y";
}
const eq = () => { // calcula la operación elegida
    switch (op) {
        case "+":
            num.value = +acu + +num.value; // operador unitario para evitar la concatenación
            rellenar_info();
            break;
        case "-":
            num.value = acu - num.value;
            rellenar_info();
            break;
        case "*":
            num.value = acu * num.value;
            rellenar_info();
            break;
        case "/":
            num.value = acu / num.value;
            rellenar_info();
            break;
        case "%":
            num.value = acu % num.value;
            rellenar_info();
            break;
        case "x_y":
            num.value = Math.pow(acu, num.value);
            rellenar_info();
            break;
        default:
            alert("Elige una operación.");
    }
}