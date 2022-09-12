//Lectura de texto y declaración de variables
const textoentrada = document.querySelector(".mensaje")
const textosalida = document.querySelector(".textoresultado")

//Acccion del boton encriptar
function btnEncriptar() {
    var mensajeencriptado = encriptacion(textoentrada.value)
    textosalida.value = mensajeencriptado
    textosalida.style.backgroundImage = "none"
    textoentrada.value = "" 
}

//LLamado de función de encriptación
function encriptacion(encriptado) {
    
    let arreglo = [["e", "enter"], 
                   ["i", "imes"], 
                   ["a", "ai"], 
                   ["o", "ober"], 
                   ["u", "ufat"], 
                   ["9", "nes"], 
                   ["8", "ches"], 
                   ["7", "ses"], 
                   ["6", "sis"], 
                   ["5", "fiv"], 
                   ["4", "for"], 
                   ["3", "tri"], 
                   ["2", "to"], 
                   ["1", "une"], 
                   ["0", "zer"],
                   [" ", "esp"]];

    encriptado = encriptado.toLowerCase();

    for (let i = 0; i < arreglo.length; i++) {
        if (encriptado.includes(arreglo[i][0])) {
            encriptado = encriptado.replaceAll(arreglo[i][0], arreglo[i][1])
        }
    } 
    return encriptado;
}

//Acccion del boton desencriptar
function btnDesencriptar() {
    var mensajedesencriptado = desencriptar(textoentrada.value)
    textosalida.value = mensajedesencriptado
    textoentrada.value = "" 
}

//LLamado de función de desencriptación
function desencriptar(desencriptado) {
    
    let arreglo = [["e", "enter"], 
                   ["i", "imes"], 
                   ["a", "ai"], 
                   ["o", "ober"], 
                   ["u", "ufat"], 
                   ["9", "nes"], 
                   ["8", "ches"], 
                   ["7", "ses"], 
                   ["6", "sis"], 
                   ["5", "fiv"], 
                   ["4", "for"], 
                   ["3", "tri"], 
                   ["2", "to"], 
                   ["1", "une"], 
                   ["0", "zer"],
                   [" ", "esp"]];

    desencriptado = desencriptado.toLowerCase();

    for (let i = 0; i < arreglo.length; i++) {
        if (desencriptado.includes(arreglo[i][1])) {
            desencriptado = desencriptado.replaceAll(arreglo[i][1], arreglo[i][0])
        }
    } 
    return desencriptado;
}

//Acción boton copiar
function copiarAlPortapapeles() {
    var texto = textosalida.value;
    navigator.clipboard.writeText(texto); 
}

function reproducir() {
    var mensajesalida = textosalida.value;
    let msg = new SpeechSynthesisUtterance(); //Creo e instancio objeto de la clase Speech
    msg.text = mensajesalida;
    msg.lang = "es-Es";
    msg.rate = 0.7; //velocidad con la que se dice el texto. Puede ir desde 0.1 hasta 10
    window.speechSynthesis.speak(msg);
}