//REVISAO DO JAVA SCRIPT

// ARRAY
//var k = [1,2,3,4]

/*console.log(k)

console.log(k[1])
*/

// adiciona algo no array
/*k.push(5)
console.log(k)
console.log(k.length)

//exclui as ultimas coisas do array
k.pop()
k.pop()

console.log(k)
*/


// variaveis do escopo

/*var a = 5
var b = 7

// função do js

function soma (x, y){
    return(x+y)
}

console.log(soma(a,b))


const soma = (a,b) => a+b
*/


// Função de Classe com Javascipt
/*
function Pessoa(a,b,c){
    this.nome = a
    this.idade = b
    this.telefone = c
}

var x = new Pessoa ("Ryan", 20, 119944665)
var y = new Pessoa ("Teste", 99, 11944249)

console.log(x)
console.log(y)
*/

function Carros(nome,ano,cor,modelo,popular){
    this.nome = nome
    this.ano = ano
    this.cor = cor
    this.modelo = modelo
    this.popular = popular
}

var a = new Carros ("Celta", 2000, "Azul", "Sprit", true)
var b = new Carros ("Ferrari F-Spider", 2018, "Vermelho", "Esportivo", false)

console.log(a)
console.log(b)