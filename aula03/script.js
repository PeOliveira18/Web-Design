const resultado = document.getElementById('resultado')


function calcular(){
    var numero = parseInt(document.getElementById('numero').value)  
    

    for(i=0; i<=10;i++){
        console.log(`A tabuada do ${numero} e: 
        ${numero} x ${i} e igual a ${numero * i}`)
        // var tabuada = numero * i
        // numeros.push(tabuada)
        // console.log(numeros)
    }
    // resultado.innerText = numeros
}




