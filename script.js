const inpAltura = document.querySelector("#altura")
const inpPeso = document.querySelector("#peso")
const calcular = document.querySelector("#calcular")
const limpar = document.querySelector("#limpar")
const main = document.querySelector("main")
const containerIMC = document.querySelector(".container-imc")
const voltar = document.querySelector("#voltar")
const valorIMC = document.querySelector("#valor-imc")

calcular.addEventListener('click', (e) => {
    e.preventDefault()
    altura = inpAltura.value
    peso = inpPeso.value
    const alturaFormat = altura.replace(/[,. ]/g, "")
    const alturaFinal = parseFloat(alturaFormat / 100)
    const imc = peso / (alturaFinal * alturaFinal)
    const imcFinal = imc.toFixed(2)
    console.log(imcFinal)
    if (isNaN(imcFinal)) {
        return
    } else {
        main.classList.remove("block")
        main.classList.add("none")
        containerIMC.classList.remove("none")
        containerIMC.classList.add("block")
        valorIMC.innerHTML = ` ${imcFinal}`
    }
    const situacao = document.querySelector("#situacao")
    if (imcFinal < 18.5) {
        situacao.innerHTML = "Magreza"
    } else if (imcFinal > 18.5 && imcFinal < 24.9) {
        situacao.innerHTML = " Normal"
    } else if (imcFinal > 25 && imcFinal < 29.9) {
        situacao.innerHTML = " Sobrepeso"
    } else if (imcFinal > 30 && imcFinal < 34.9) {
        situacao.innerHTML = " Obesidade I"
    } else if (imcFinal > 35 && imcFinal < 39.9) {
        situacao.innerHTML = " Obesidade II"
    } else{
        situacao.innerHTML = "Obesidade III"
    }
})
voltar.addEventListener('click', () => {
    main.classList.remove("none")
    main.classList.add("block")
    containerIMC.classList.remove("block")
    containerIMC.classList.add("none")
})