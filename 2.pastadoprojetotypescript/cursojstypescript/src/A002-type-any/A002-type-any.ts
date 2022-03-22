/* eslint-disable */
// Utilize any apenas em último caso
function showMessage(msg: any){
  return msg;
}

// Como o tipo do parâmetro é any
// Podemos adicionar vários tipos
// no parâmetro

console.log(showMessage([1,2,3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// Já aqui só podemos dar entradas com string
// '' "" ``

function showMessages(msg: string){
  return msg;
}

console.log(showMessages('Opa'));
console.log(showMessages('Olá'));
console.log(showMessages('Oi'));
