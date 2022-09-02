/* var variable = 0; // alcance local, el valor puede cambiar
const constante = "Constante"; // NO puede cambiar el valor. Contraseñas, apikey, email

//constante = "Cambio";

let let_var = 1; //solo funciona en el bloque en el que se declara. por ejemplo si se declara en un for, if, while

for(let i=0; i<5; i++){
    console.log(i);
}

for(var j=0;j<5;i++){
    console.log(j);
} */

//si quiero que mi variante cambie a lo largo del codigo, uso var. si es solo para un loop o condicional, usamos let

/* FUNCIONES FLECHAS */

/* function sumatoria(par1, par2){
    return par1+par2;
}

console.log(sumatoria(1, 2));

var sumatoriaFlecha = (par1, par2) => par1+par2; 

var sumF = sumatoriaFlecha(2,3);
console.log(sumF); //las funciones flechas son mas cortas en sintaxis */

/*

(response => response.json()) es una funcion flecha

function x(response){
    return response.json();
}

*/

function helloWorld(nombre){
    console.log("Hello World" +nombre);
}

helloWorld("elena");


var helloWorldF = (nombre) => console.log("hello"+nombre);

helloWorldF("juana");

/* FUNCIONES ARRAYS */

var nums = [3,2,4,5,7];
for(var i=0; i<nums.length;i++){
    console.log(nums[i]);
}

//siempre que tengamos un forEach este va a mandar el valor, la posicion y el arreglo

//nums.forEach (function (num, posicion, arreglo){
  //  console.log(nums);
//}

// function imprime(num,posicion,arreglo){
//    console.log(num);
//}
//nums.forEach(imprime);

console.log("hola");

console.log("hola");