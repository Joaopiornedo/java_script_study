/*Exercício 1: 

FizzBuzz Simples
Objetivo: Crie um loop que percorra os números de 1 a 20. 
Para cada número:
Se for divisível por 3, imprima "Fizz".
Se for divisível por 5, imprima "Buzz".
Se for divisível por ambos, imprima "FizzBuzz".
Caso contrário, imprima o número.*/

for (let x = 1; x <= 20; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x + ' Divide por 3 e 5: FIZZBUZZ');
    } else if (x % 3 === 0) {
        console.log(x + ' Divide por 3: FIZZ');
    } else if (x % 5 === 0) {
        console.log(x + ' Divide por 5: BUZZ');
    } else {
        console.log(x + ' Não divide por 3 nem por 5');
    }
}

/*Exercício 2:

 Soma de Números
Objetivo: Usando um loop, some todos os números de 1 a 100.
 Se a soma ultrapassar 1000, pare o loop e exiba
  a soma total até aquele ponto.*/

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i; // Adiciona o valor de i à soma

    if (soma > 1000) { // Verifica se a soma ultrapassou 1000
        console.log("A soma ultrapassou 1000.");
        console.log("Soma total até agora: " + soma);
        break; // Para o loop
    }
}

if (soma <= 1000) {
    console.log("A soma total dos números de 1 a 100 é: " + soma);
}

//EXERCÍCIO 3:
// Imprima números pares de 0 a 20
// Utilize um loop for para imprimir todos os números pares de 0 a 20.

for (let y = 0; y < 21; y++) {
    if (y % 2 == 0) {
        console.log(y + ' é Par')
    }
}

//EXERCÍCIO 4

/*  Soma de números de 1 a 100
Crie um loop for que some todos os números de 1 a 100 e exiba o resultado no console. */

var total = 0;

for (var k = 1; k <= 100; k++) {
    total += k;
    console.log(total)
}


//EXERCÍCIO 5
/*
Imprima os elementos de um array
Dado o array let arr = [1, 2, 3, 4, 5];, use um loop for para imprimir cada elemento do array.*/

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//EXERCÍCIO 6

//Escreva um loop for que conte quantos números ímpares existem entre 1 e 50.

for (n = 0; n < 50; n++) {
    if (n % 2 == 1) {
        console.log(n + ' Impar')
    }
}

//Exercicio 7

//Tabuada de um número
//Solicite ao usuário um número e use um loop for para imprimir a tabuada desse número (ex: 3 x 1 = 3,3 x 2 = 6, etc.).

for (var g = 1; g < 11; g++) {

    var nu = 3;
    var final = nu * g

    console.log(nu + ' x ' + g + ' = ' + final);
}