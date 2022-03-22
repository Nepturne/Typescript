/* disable eslint */

// Dessa forma o Typescript perde os autocomplete
/*const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};*/

//objetoA.chaveA = 'Outro valor';
// objetoA.chaveC = 'Nova Chave'; não podemos
//console.log(objetoA.chaveB);

// Alternativa:
const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  // Index Signature
  // Se por acaso eu quiser criar mais chaves
  // chave > valor dentro do meu objeto:
  // ou [key: string]: any;
  [key: string]: unknown; // unknown é mais que any
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
console.log(objetoA.chaveC); // undefined
//objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova Chave';
console.log(objetoA.chaveB); // Valor B


// readonly = Não se pode alterar o atributo
// {} object -> Não utilizem é possível dar bugs
