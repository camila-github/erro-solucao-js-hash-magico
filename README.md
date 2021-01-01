## Treinamento Digital Innovation One - Exercicio - Hash Magico

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Resolvendo Algoritmos Com JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

O conceito de hash é transformar uma grande quantidade de dados em uma pequena quantidade de informações. Nesse algoritmo você terá uma entrada com várias linhas, cada uma com uma string. 

O valor de cada caracter é computado como segue:

Valor = (Posição no alfabeto) + (Elemento de entrada) + (Posição do elemento)

As posições iniciam em zero. 'A' tem posição 0 no alfabeto, ‘C' tem posição 2 no alfabeto, ... O cálculo de hash retornado é a soma de todos os caracteres da entrada. Por exemplo, se a entrada for:

CBA

DDD

então cada caractere deverá ser computado como segue:

2 = 2 + 0 + 0 : 'C' no elemento 0 posição 0

2 = 1 + 0 + 1 : 'B' no elemento 0 posição 1

2 = 0 + 0 + 2 : 'A' no elemento 0 posição 2

4 = 3 + 1 + 0 : 'D' no elemento 1 posição 0

5 = 3 + 1 + 1 : 'D' no elemento 1 posição 1

6 = 3 + 1 + 2 : 'D' no elemento 1 posição 2

O cálculo final de hash será 2+2+2+4+5+6 = 21.


#### Entrada:

A entrada contém vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste inicia com um inteiro L (1 ≤ L ≤ 100) que indica a quantidade de linhas que vem a seguir. Cada uma destas L linhas contém uma string com até 50 letras maiúsculas ('A' - 'Z').

#### Saída:

Para cada caso de teste imprima o valor de hash que é calculado conforme o exemplo apresentado acima.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
1 | 594
2 |
OSADOISAJDSAOIDJA |
ASOIJDOSAJDASOIDJA |	





#### Link Referência:
https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-04.js

Funções Anônimas(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es).

Destructuring Assignment(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao).

Reduce() ( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce ).

Match(), Expressão Regular RegExp()( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions ).



```javascript
// SOLUCAO 1 
/* Usado função anonima */
(function hashMagico(numEntrada) {
    while (numEntrada--) {
        entradas = [];
        resultado = 0;
        numCasos = parseInt(gets());
        /*Armazena as proximas linhas da entrada (gets()) no array*/
        while (numCasos--) entradas = [...entradas, gets()];
        /* .match(/[A-Z]/g)  - apenas letras maiusculas serão verificadas*/
        /* reduce() - referente o calculo do hash*/
        for (let [index, linha] of entradas.entries()) {
            resultado += linha.match(/[A-Z]/g).reduce((valorAcc, curr, strIndex) => valorAcc + (parseInt(curr, 36) - 10) + index + strIndex, 0);
        }
        console.log(resultado);
    }
})(gets());
```
