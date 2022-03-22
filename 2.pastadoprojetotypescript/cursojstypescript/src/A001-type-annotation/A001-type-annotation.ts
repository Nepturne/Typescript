/* eslint-disable */
// O Comando acima desabilita a ação do eslint neste arquivo:

//  ** Aula ** =>
//-------------------------------------------------------------
// Type Annotation:
let nome: string    = 'Luiz';  // Qualquer tipo de Strings : '' "" ``
let idade: number   = 30;      // 10,1.57, -5.55, 0xf00d , 0b1010 , 0o7744
let adulto: boolean = true;    // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n;      // bigint
//-------------------------------------------------------------


// Arrays:
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[]     = [1,2,3];

let arrayDeStrings: Array<string> = ['a','b','c'];
let arrayDeStrings2: string[]     = ['a','b','c'];


// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Lucas',
  idade: 30
};
// Quando coloquei [adulto?:] essa interrogação está dizendo
// que esse atributo é opcional e os que não possuem ?:
// são atributos obrigatórios

// Dando Control + Espaço a gente vê o que eles pedem
console.log(pessoa.nome);


// Funções
function somas(x: number, y: number): number{
  return x + y;
}

function soma(x: number, y: number): number{
  return x + y;
}

const result = soma(2,2);

// Funções sem annotation de retorno
// recebem a annotation de voide
// :void

const soma2: (x: number , y: number) => number = (x,y) => x + y;
// Tudo depois de dois pontos é a Type Annotation
