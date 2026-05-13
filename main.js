/*
function calcularIMC(altura, peso) {
    return peso / Math.pow(altura, 2)
}

function main() {
    const alturaInput = document.getElementById("altura")
    const pesoInput = document.getElementById("peso")

    const altura = parseFloat(alturaInput.value)
    const peso = parseFloat(pesoInput.value)

    if(!isNaN(altura) || !isNaN(peso)) {
        alert("Por favor, insira valores válidos para altura e peso.")
        return
    }
}

const IMC = calcularIMC(altura, peso)
const resultado = IMC
alert(resultado)
*/

function searchFlashcards(e) {
    console.log("e.target.value")
}

function showResult() {
    const section = document.querySelector("#result")
    // crase = permite texto com quebra de linha
    section.innerHTML = `<article class = "flashcard">
                <span class = "flashcard-category">Arquitetura CSS</span>
                <h2 class = "flashcard-question">Qual é a função do Flexblox no CSS?</h2>
                <button onclick="main()" class = "bnt-primary" arial-label = "Mostrar resposta">Mostrar resposta</button>
            </article>`
}