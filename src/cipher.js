
const cipher = {
encode: (offset, textIn) => {
    if (offset === null || offset === 0 ) {
        throw new TypeError();
        }
let encodeText = "";
    for (let i = 0; i < textIn.length; i++) {
//hacemos una variable que sera el numero ascii que nos dará el charCodeAt 
    let asciiNumber = textIn.charCodeAt(i);
/*hacemos una condicional si el numero ascii es mayor o igual a 65 es true y si 
es menor o igual que 90 es true entonces se aplica la formula para cifrar en mayusculas*/
    if (asciiNumber >= 65 && asciiNumber <= 90) {
        let capitalLetters = (asciiNumber - 65 + parseInt(offset)) % 26 + 65;
        encodeText += String.fromCharCode(capitalLetters);
    }
    
// lo mismo pero para minusculas
    else if (asciiNumber >= 97 && asciiNumber <=122) {
        let lowerLetters = (asciiNumber - 97 + parseInt(offset)) % 26 + 97;
        encodeText += String.fromCharCode(lowerLetters);
        }

//cualquier otro caso se dejara igual 
    else {
        encodeText += textIn[i]
    }
}
return encodeText
  }, //importante la comita :3 

decode: (offset, textIn) => {
    if (offset === null || offset === 0 ) {
        throw new TypeError();
        }
    let decodeText = ""; 
    for (let i = 0; i < textIn.length; i++) {
        let asciiNumber = textIn.charCodeAt(i);

    if (asciiNumber >= 65 && asciiNumber <= 90) {
        let capitalLetters = (asciiNumber - 90 - parseInt(offset)) % 26 + 90;
        decodeText += String.fromCharCode(capitalLetters);
    }

    else if (asciiNumber >= 97 && asciiNumber <= 122) {
        let lowerLetters = (asciiNumber - 122 - parseInt(offset)) % 26 + 122;
        decodeText += String.fromCharCode(lowerLetters);
    }

    else { 
        decodeText += textIn[i];
    } 
    }
    return decodeText;
}
};

export default cipher;