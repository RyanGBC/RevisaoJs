//##### java script#####
//TIPOS DE VARIAVEIS

//let a = escopo local
//var b = escopo global
//const c = constante



// ARRAY
/*var k = [1,2,3,4]

console.log(k)

console.log(k[1])
*/

// adiciona algo no final do array
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


// Classe de função
/*function Carros(nome,ano,cor,modelo,popular){
    this.nome = nome
    this.ano = ano
    this.cor = cor
    this.modelo = modelo
    this.popular = popular ? "Popular" : "Não carro velho"
}

var a = new Carros ("Celta", 2000, "Azul", "Sprit", true)
var b = new Carros ("Ferrari F-Spider", 2018, "Vermelho", "Esportivo", false)

console.log(a)
console.log(b)
*/

/*t = [1,2,3,4]
t.forEach(b => {
    if((b%2) ===0){
        console.log(b, "é par")
    }
    else{
        console.log(b,"é impar")
    } 
});

console.log(t[0], t[1])
*/

// ARRAY DE OBJETO

/*w = [
    {nome: "floriano" , idade:"99"},
    {nome: "floriana" , idade:"99"}
]
console.log(w)
*/


/*let z = []

function Alunos(nome,rgm,curso){
    this.nome = nome
    this.rgm = rgm
    this.curso = curso
    z.push(this)
}

var a = new Alunos("Claudia", 5599748, "ads:")
var b = new Alunos("Maria", 5599748, "adm:")
var c = new Alunos("Clara", 5599748, "ads:")
var d = new Alunos("Alinhandro", 5599748, "educacao fisica:")
var e = new Alunos("Lucas", 5599748, "estetica:")

z.forEach(y => {
    if(y.curso === "ads:"){
        console.log(y.curso,"Curso Top")
    }else{
        console.log(y.curso,"curso Lixo")
    }
});


console.log(z)
*/


let t = []

function Times(nome,jogador,estadio){
    this.nome = nome
    this.jogador = jogador
    this.estadio = estadio
    t.push(this)
}

var a = new Times("Santos", "Neymar", "Vila Belmiro")
var b = new Times("Palmeiras", "Dudu", "Allianz Parque")
var c = new Times("São Paulo", "Lucas moura", "Morumbi")
var d = new Times("Cruzeiro", "Cassio", "Mineirão")
var e = new Times("Cruzeiro", "Gabigol", "Mineirão")

t.forEach(w => {
    if(w.nome === "São Paulo"){
        console.log(w.nome,"Soberano o maior, com o melhor estadio", w.estadio)
    }else{
        console.log(w.nome,"Time Lixo")
    }
    
});




let l = []

function Timesse(nome,estadio,jogador){
  this.nome = nome
  this.estadio = estadio
  this.jogador = jogador
  l.push(this)
}

var time1 = new Timesse  ("Real Madrid", "Santiago Bernabeu", "Rodrygo raio")
var time2 = new Timesse  ("Juventos", "nao faço ideia", "dybala")




l.forEach(t => {
    if(t.nome === "Real Madrid"){
      console.log(t.nome, "TIME MAIS FODA DO MUNDO")
    }else{
      console.log(t.nome, "TIME LIXO DO KRL")
    }    
});


let s = []

function Camisas(estampa, marca, tamanho){
    this.estampas = estampa
    this.marca = marca
    this.tamanho = tamanho
    s.push(this)
}


var camisa1 = new Camisas ("Azul", "Nike", "G")
var camisa2 = new Camisas ("Amarelo", "Louis vuitton", "M")


s.forEach(c => {

    if(c.marca === "Nike"){
        console.log(c.marca, "Marca maneira")
    }else{
        console.log(c.marca, "Marca luxo")
    }

});


let r = []

function CarrosV(nome, marca, cambio){
    this.nome = nome
    this.marca = marca
    this.cambio = cambio
    r.push(this)
}


var carro1 = new CarrosV ("CLA 200", "Mercedes", "Manual")
var carro1 = new CarrosV ("Fusca", "Volkswagen", "Automatico")

r.forEach(o => {
    if(o.nome === "Fusca"){
        console.log(o.nome, "O mais brabo")
    }else{
        console.log(o.nome, "Até vai!")
    }
});