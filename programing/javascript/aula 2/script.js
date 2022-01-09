// tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'tadeu';
console.log(typeof(nome));

//function
var funcao = function() {}
console.log(typeof(funcao));

//como declarar variáveis
var variavel = "tadeu";
variavel = "tad";
console.log(variavel);

let variavel2 = 'crowley';
variavel2 = 'aleister';
console.log(variavel2);

const constante = 'eliphas';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoLocal();

// atribuição
var atribuicao = 'tadeu';

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adição 
var adicao = 1 + 1;
console.log(adicao)

//subtração
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 4;
console.log(potenciacao);

// maior que
var maiorQue = 5 > 3;
console.log(maiorQue);

// menor que
var menorQue = 5 < 3;
console.log(menorQue);

// maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 5;
console.log(menorOuIgual);


var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);


