/*
----------------- EXERCITE SEU CONHECIMENTO EM JAVASCRIPT -----------------

Exercício 1 ----------------------------------------------------------------------
Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada. Utilize essa função para personalizar a experiência de cada usuário.

R.
alert('Olá, seja bem-vindo!')

Exercício 2 ----------------------------------------------------------------------
Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. 
Retorne true se for par e false se for ímpar.

R.
let numero = prompt ('Digite um número: ');
function fac(numero){
    if (numero % 2 == 0){
        return(`O número ${numero} é par`);
    } else {
        return(`O número ${numero} é ímpar`);
    }
}

console.log(fac(numero));

Exercício 3 ----------------------------------------------------------------------
Implemente uma função que calcule a média aritmética de um array
de números e retorne o resultado. 
Utilize essa função para calcular a média de diferentes conjuntos 
de números.





function calculoMedia(array){
    let mediaAritmetica = 0;
    
    for (let numero of array){
        mediaAritmetica += numero; 
    }
    return mediaAritmetica / array.length;
}

let array1 = [2, 3, 4, 9, 8, 7, 6];
let array2 = [4, 3, 5, 9, 8, 7, 9];
let array3 = [4, 1, 5, 9, 7, 7, 8];


let media = calculoMedia(array1);
console.log(media);                //   Saída ----> 5.571428571428571

let media2 = calculoMedia(array2);
console.log(media2);              //    Saída ----> 6.428571428571429

let media3 = calculoMedia(array3);
console.log(media3);              //    Saída ----> 5.857142857142857



Exercício 4 ----------------------------------------------------------------------
Crie uma função que receba uma string como parâmetro e retorne a mesma string 
com todas as letras em caixa alta. Utilize essa função para converter diferentes 
strings.




function convert(palavra){
    return palavra.toUpperCase();
}
let frase1 = convert(prompt("Digite uma palavra uma frase a ser convertida: "));
console.log(frase1);                //    Saída ----> QUAL QUER FRASE OU PALAVRA.              

let frase2 = convert(prompt("Digite uma palavra uma frase a ser convertida: "));
console.log(frase2);                //    Saída ----> QUAL QUER FRASE OU PALAVRA.

let frase3 = convert(prompt("Digite uma palavra uma frase a ser convertida: "));
console.log(frase3);                //    Saída ----> QUAL QUER FRASE OU PALAVRA.

/;;;;;;;;;;;;

Exercício 5 ----------------------------------------------------------------------
Desenvolva uma função que determine se um número é primo ou não. 
Retorne true se for primo e false se não for.

 +
  Aqui teve o uso dos operadores de comparação e operador lógico
   === ---> IGUAL A (tanto o valor quanto o tipo do objeto)
   ||  ---> OU
*/
function numeroPrimo(numero){
    if (numero <= 1)
        return false;
    if (numero <= 3)
        return true;

    if (numero % 2 === 0 || numero % 3 === 0)
        return false;
    for (let i = 5; i * i <= numero; i += 6){
        if(numero % i === 0 || numero % (i + 2) === 0)
            return false;
    }
    return true;
}

console.log(numeroPrimo(37));