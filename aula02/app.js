function calcular(){
    var qtdLivros = prompt('Quantos livros voce vai comprar?');
    var precoTotal = 1;
    if (qtdLivros >= 7){
        precoTotal = qtdLivros * 15;
        alert(`Voce pagara ${precoTotal} pelos ${qtdLivros}livros `);
    }else{
        precoTotal = qtdLivros * 22;
        
    }
}



