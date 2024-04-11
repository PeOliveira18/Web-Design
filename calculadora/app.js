function clicar(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    //Processamento
    var soma = n1+n2

    //Saida
    /* console.log(typeof resultado)
    console.log(resultado) */
    resultado.innerText = `O resultado foi ${soma}`
}

function vezes(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado2 = document.getElementById('resultado2')

    var multiplicar = n1*n2
    resultado2.innerText = `O resultado foi ${multiplicar}`
}


function subtracao(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado3 = document.getElementById('resultado3')

    var subtrair = n1-n2
    resultado3.innerText = `O resultado foi ${subtrair}`
}


function divisao(){
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado4 = document.getElementById('resultado4')

    if (n2 ==0){
        resultado4.innerText = "Nao e possivel dividir por zero"
    }else{
        var dividir = n1/n2
    resultado4.innerText = `O resultado foi ${dividir.toFixed(2)}`
    }
    
}