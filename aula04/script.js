function escolhaComp(){
    const jokeipo = ["Pedra","Papel","Tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio]

}

function jogar(escolhaDoUsuario){

let escolhaPC = escolhaComp()
let resultado 

if(escolhaDoUsuario === escolhaPC){
    resultado = "Empate!"
}

if (escolhaDoUsuario === 'Pedra' && escolhaComp === 'Papel'){
    resultado = 'Ganhou!'
}

document.getElementById('resultado').innerText = resultado


}

