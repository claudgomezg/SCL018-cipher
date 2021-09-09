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

const imageLanding = document.getElementById("GabrielaPhoto");
const youtubeLink = document.getElementById("youtubeDocumental");

const toYoutube = document.getElementById("GabrielaPhoto");
    toYoutube.addEventListener("click", () => {
        imageLanding.style.display = "none";
        youtubeLink.style.display = "block";
    });

// TEST FUNCION COPY TEXT
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


const goBack = document.getElementById("arrow");
goBack.addEventListener("click", () => {
    secondPage.style.display = "none";
    firstPage.style.display = "block";
})

//variables para llamar a los botones cifrar y descifrar
const encondeBtn = document.getElementById("encodeButton");
const decodeBtn = document.getElementById("decodeButton");
//variable para llamar al input númerico
const offsetNumber = document.getElementById("displacement");
//variables para llamar a los textarea de ingreso y retorno
const textAreaIn = document.getElementById("message");
const textOut = document.getElementById("outputMessage");

encondeBtn.addEventListener("click", () =>{
    const offset = offsetNumber.value;
    const textIn = textAreaIn.value;
    textOut.value = cipher.encode(offset, textIn);
});

decodeBtn.addEventListener("click", () => {
    const offset = offsetNumber.value;
    const textIn = textAreaIn.value;
    textOut.value = cipher.decode(offset, textIn);
});

const eraseBtn = document.getElementById("eraseButton");

eraseBtn.addEventListener("click", () => {
    document.getElementById("displacement").value = 0;
    document.getElementById("message").value = "";
    document.getElementById("outputMessage").value = "";
});

import cipher from './cipher.js';