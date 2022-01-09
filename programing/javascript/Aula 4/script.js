var jogador1 = 1
var jogador2 = 0

/* if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!')
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!')
    } else {
        console.log('Ninguém marcou ponto')
    }
} */

// if ternário
/* jogador1 != -1 && jogador2 != -1 ? console.log('Os Jogadores sáo válidos') : console.log('Jogadores inválidos!')

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;
} 

else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1
} 

else if (jogador1 > 0 && jogador2 > 0) {
    console.log('Ambos os jogadores marcaram pontos!')
    placar = jogador1 = jogador2
}

else {
    console.log('Ninguém marcou ponto')
    placar = jogador1 = jogador2
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 venceu!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 venceu!')
        break;
    case placar = jogador1 = jogador2:
        console.log('O jogo terminou empatado.')
        break;
} */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

/* for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
} */

/* for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i);
} */

/* for (i of array) {
    console.log(i);
}

//em objeto ele esculhamba tudo
for (i of object.propriedade1) {
    console.log(i);
} */

var a = 0;

/* while (a < 10) {
    a++;
    console.log(a)
} */

do {
    a++;
    console.log(a)
} while ( a < 10)