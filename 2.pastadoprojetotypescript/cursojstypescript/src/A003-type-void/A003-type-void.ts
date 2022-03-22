/* disable eslint */
// O tipo void quer dizer que uma função ou método
// não retorna nada, exemplo:

function semRetorno(...args: string[]): void {
  console.log(args.join(' ')); // join concatena com o espaço ' '
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
// Quando utilizamos o rest operator
// temos um array.

semRetorno('Luiz', 'Otávio', 'Show');

semRetorno( 1 , 'Otávio', 'Kazdy');

pessoa.exibirNome();

// Module Mode != do Script Mode
export { pessoa };
