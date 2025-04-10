
const soma = (a, b) => {return a + b;};

console.log(soma(2,8))

var s = [1,2,3,4]

console.log(s[2])

let a = [];

function Jogos(nome, classificacao, preco){
    this.nome = nome
    this.classificacao = classificacao
    this.preco = preco
    a.push(this)
}

var jogo1 = new Jogos('gta','+18', 7) 


a.forEach(j => {
    if(j.nome === 'gta'){
        console.log('Melhor jogo do ano', j.nome)
    }else{
        console.log('Pior jogo do ano')
    }
});