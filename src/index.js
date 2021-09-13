// window.addEventListener("load", inicio, true); //listener test

//declaración de variables para la sección home y sección cipher
const firstPage = document.getElementById("home");
const secondPage = document.getElementById("cipher");
//función del botón principal para mostrar sección cipher
const toCipher = document.getElementById("showCipher");
    toCipher.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

//declaración de variables para la sección de foto y video
const imageLanding = document.getElementById("GabrielaPhoto");
const youtubeLink = document.getElementById("youtubeDocumental");

//función para mostrar video al presionar la foto en el landing
const toYoutube = document.getElementById("GabrielaPhoto");

    toYoutube.addEventListener("click", () => {
        imageLanding.style.display = "none";
        youtubeLink.style.display = "block";
    });

// Función copiar texto
function copyText(htmlElement){
    if(!htmlElement){
        return;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentElement.removeChild(inputElement);
}
//query selector para copiar el contenido del acordeón
document.querySelector('#copy-text-btn').onclick =
function()
{
copyText(document.querySelector('#letter1'));
    alert("Texto copiado")
}
document.querySelector('#copy-text-btn2').onclick =
function()
{
copyText(document.querySelector('#letter2'));
    alert("Texto copiado")
}
document.querySelector('#copy-text-btn3').onclick =
function()
{
copyText(document.querySelector('#letter3'));
    alert("Texto copiado")
}
document.querySelector('#copy-text-btn4').onclick =
function()
{
copyText(document.querySelector('#letter4'));
    alert("Texto copiado")
}
document.querySelector('#copy-text-btn5').onclick =
function()
{
copyText(document.querySelector('#letter5'));
    alert("Texto copiado")
}

// Función botón atrás
const goBack = document.getElementById("arrow");
goBack.addEventListener("click", () => {
    secondPage.style.display = "none";
    firstPage.style.display = "block";
})

//variables para llamar a los botones cifrar y descifrar
const encondeBtn = document.getElementById("encodeButton");
const decodeBtn = document.getElementById("decodeButton");

//variable para llamar al textArea de salida
const textOut = document.getElementById("outputMessage");

//Listener botón encode
encondeBtn.addEventListener("click", () =>{
    const offset = document.getElementById("displacement").value;
    const textIn = document.getElementById("message").value;
    textOut.value = cipher.encode(offset, textIn);
});

//Listener botón decode
decodeBtn.addEventListener("click", () => {
    const offset = document.getElementById("displacement").value;
    const textIn = document.getElementById("message").value;
    textOut.value = cipher.decode(offset, textIn);
});

//Función botón borrar
const eraseBtn = document.getElementById("eraseButton");

eraseBtn.addEventListener("click", () => {
    document.getElementById("displacement").value = "";
    document.getElementById("message").value = "";
    document.getElementById("outputMessage").value = "";
});

// importación hoja cipher
import cipher from './cipher.js';