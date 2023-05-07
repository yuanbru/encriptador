const textArea = document.querySelector(".escrito");
const mensaje = document.querySelector(".mensaje");
const noencuentra = document.querySelector(".noencuentra");
const aencriptar = document.querySelector(".aencriptar");


function controlarAcento(textArea) {
    if (textArea.match('/^[A-Za-z0-9\s]+$')) {

        alert("No se permiten acentos ni caracteres especiales, por favor introduzca de nuevo el texto");

        textArea.value = "";
        mensaje.value = "";
        mensaje.style.opacity = "1";
        noencuentra.style.opacity = "1";
        aencriptar.style.opacity = "1";

        return true;

    } else {
        return false
    }

}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);

    if (textoEncriptado != "") {
        if (!controlarAcento(textoEncriptado)) {
            mensaje.value = textoEncriptado;
            textArea.value = "";
            mensaje.style.backgroundImage = "none";
            noencuentra.style.opacity = "0";
            aencriptar.style.opacity = "0";
            textArea.focus();
        }
    }


}


function encriptar(stringEncriptado) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "ines"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptado = stringEncriptado.toLowerCase();

    if (stringEncriptado != "") {
        for (let i = 0; i < matrizCodigo.length; i++) {

            if (stringEncriptado.includes(matrizCodigo[i][0])) {

                stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);


            }
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);

    if (!controlarAcento(textoEncriptado)) {

        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        noencuentra.style.opacity = "0";
        aencriptar.style.opacity = "0";
        textArea.focus();

    }
}

function desencriptar(stringDesencriptado) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "ines"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringDesencriptado.includes(matrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }

    return stringDesencriptado;
}

function btnCopiar() {

    mensaje.select();
    document.execCommand('copy');

    alert("Copiado exitoso");


}