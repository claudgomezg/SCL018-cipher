window.addEventListener("load", inicio, true); //listener test

//declaración de variables para la sección home y sección cipher
const firstPage = document.getElementById("home");
const secondPage = document.getElementById("cipher");
//función del botón principal para mostrar sección cipher
const toCipher = document.getElementById("showCipher");
    toCipher.addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

// test function

function inicio(){
    document.getElementById("message").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  
        let text = document.getElementById("message").value;
        let displacement = document.getElementById("displacement").value;               
        document.getElementById("outputMessage").value = cifrar2(text, displacement);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let text = document.getElementById("message").value;
        let displacement = document.getElementById("displacement").value;                               
        document.getElementById("outputMessage").value = descifrar(text, displacement);
    },true);
}

function cifrar(text, displacement) {
    if (!text) 
        return ''; 
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    displacement = (displacement % 26 + 26) % 26; 
    return text.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + displacement) % 26]);
}

function descifrar(text, displacement) {
    if (!text) 
        return ''; 
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    displacement = (displacement% 26 - 26) % 26; 
    return text.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - displacement) % 26]);
}

function cifrar2(text, displacement) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    displacement = (displacement % 26 + 26) % 26; 
    
    if (text){
        for (let i=0; i<text.length; ++i){
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(text[i])!=-1)
            { 
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(text[i])+displacement) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=text[i]; // Números, espacios, símbolos... 
        }
    }
    return resultado;
}

// END test function