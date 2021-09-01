// import cipher from './cipher.js';

// // eslint-disable-next-line no-console
// console.log(cipher);

//declaracion de variables para la seccion home y seccion cipher
const firstPage = document.getElementById("home");
const secondPage = document.getElementById("cipher");
//funcion del boton principal para mostrar seccion cipher
const toCipher = document.getElementById("showCipher");
    toCipher.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});
