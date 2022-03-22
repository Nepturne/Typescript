------------------------------------------------------
/*
TypeScript é um superset para o Javascript
com tipagem estática , novos recursos e 
que compila para Javascript puro.

É possível rodar um projeto com suporte em
EcmaScript5 num ambiente EcmaScript6.

O contrário não funcionaria:
EcmaScript7 rodando com EcmaScript6 não rodaria.

O TypeScript adiciona novos recursos e funcionalidades
ao Javascript.


TypeScript compila pra Javascript
E só ai então executar em node.js
navegador e tal..
*/
//------------------------------------------------------
//Exemplo:
//------------------------------------------------------
//-> Javascript: 

function multiplyNumbers( x,y ) {
    return x * y;
}

multiplyNumbers(5,[4,3]); // Resultaria: NaN
//------------------------------------------------------
//-> TypeScript:
//** Adiciona tipagem estática ao Javascript

function multiplyNumbers( x: number, y: number) {
    return x * y;
}

const result = multiplyNumbers( 5, [4,3]); // NaN
// Daria errado, não deixaria compilar 
// de TypeScript para Javascript
// Argument of type 'number[]' is not
// assignable to parameter of type 'number
//------------------------------------------------------
//** Adiciona novos recursos ao Javascript
// Exemplo : interface

interface TemNome {
    nome: string;
}

interface TemSobrenome{
    sobrenome: string;
}

class Aluno implements TemNome, TemSobrenome{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        public readonly idade: number,
    ) {}
}

const aluno = new Aluno('Luiz','Otávio', 30);
console.log(aluno);
// Aluno { 
    nome: 'Luiz', 
    sobrenome: 'Otávio', 
    idade: 30
}
//------------------------------------------------------
//** Contratos: intefaces
//** Modificadores de Acesso: public, protected, private
//------------------------------------------------------
//** Classes Abstratas
abstract class Animal{
    abstract makeNoise(): void;
}

class Dog extends Animal{
    constructor(private readonly name: string){
        super();
    }

    makeNoise(): void{
        console.log(`${this.name} is barking.`);
    }
}

const dog = new Dog('Tina');
dog.makeNoise(); // Tina is barking.
------------------------------------------------------
// TypeScript não é só POO , mas ele é multiparadigma

type CalculatorFn = (x: number, y: number) => number;

const add: CalculatorFn = (x,y) => x+y;
const sub: CalculatorFn = (x,y) => x+y;
const mul: CalculatorFn = (x,y) => x+y;
const div: CalculatorFn = (x,y) => x+y;

const twoPlusTwo      = add(2,2); // 4
const twoMinusTwo     = sub(2,2); // 0
const twoTimesTwo     = mul(2,2); // 4
const twoDividedByTwo = div(2,2); // 1
------------------------------------------------------
// TypeScript tem Enum:

type ProgrammingLanguages = 'Python' | 'Javascript' | 'TypeScript';

function sayFavoriteProgrammingLanguage(language: ProgrammingLanguages){
    return `You like ${language}`;
}

const favoriteLanguage = sayFavoriteProgrammingLanguage('');
console.log(favoriteLanguage);
//------------------------------------------------------
// Utilizamos TypeScript enquanto programamos em Javascript