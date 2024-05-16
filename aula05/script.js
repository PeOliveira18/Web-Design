const pessoas = ["Fulano","Ciclano","Beltrano"]

// pessoas.push("Pedro")    //Adiciona um elemento no final do array

// pessoas.pop()            //Remove o ultio item da lista

// pessoas.unshift("Pedro")        //Adiciona um elemento no inicio do array

// pessoas.shift()                 //Remove o primeiro item do array

// pessoas[1] = "Pedro"            //Atualiza o valor de um array

// console.log(pessoas) 

// for (i=0; i<=10;i++){
//     console.log(pessoas[i])
// }


/* pessoas.forEach(
    function rodarArray(usuario){
        console.log(usuario + "Js")
    }
)

pessoas.forEach(usuario => console.log(usuario.toUpperCase()))

pessoas.forEach(
    (usuario)=>{
        console.log(usuario.toLowerCase())
    }
)
 */

/* const pessoasModificadas = pessoas.map(usuario => usuario.toUpperCase())

function modificarPessoas(){
    return pessoas.map(usuario=>usuario.toLocaleLowerCase())
}

console.log(modificarPessoas()) */

/* const numeros = [1 , 2 , 3]

function dobrar(){
    return numeros.map(dobrando=> dobrando*2)
}

console.log(dobrar()) */


/* function dobrar(array){
    return array.map(dobrando=> dobrando*2)
}

let numeros = dobrar([1 , 2 , 3])

console.log(numeros)

let strings = ["oi","tudo","bem"]

function trocarParaMaiuscula(){
    return strings.map(trocando => trocando.toUpperCase())
}
console.log(trocarParaMaiuscula()) */

function trocando(array){
    return array.map(trocar=>trocar.toUpperCase())
}
console.log(trocando(['oi','tudo','bem']))

const filmes = [{
    nome: "Ceu de Outubro",
    diretor: "Nolan",
    ano:1993,
    /* atores:[
        
    ] */
},{
    nome:"Procurando Nemo",
    diretor:"Mr. Beast",
    ano: 2007
},{
    nome:"Top Gun",
    diretor:"Tarantino",
    ano:1988
}]

/* const filmesModificados = filmes.map(filme=> filme.nome)
console.log(filmesModificados) */


const filmesModificados = filmes.filter(filme=> filme.ano>2000)
console.log(filmesModificados)