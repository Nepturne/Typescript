Started: 

Iniciar criando o .gitignore

E dar um npm init -> Iniciar o projeto node

E jogar essa pasta no Github
-------------------------------------------------
Instalando o TypeScript

-> Não instalamos o TypeScript de forma global
npm i typescript -D -> Instalação Dependência de Desenvolvimento


Irá criar a pasta node_modules na raiz do projeto
com as pastas e arquivos dentro dele:
*.bin
    tsc
    tsserver
* typescript
-------------------------------------------------
Na pasta bin a gente pode usar tsc ou tsserver
para compilar os arquivos TypeScript para Javascript
-------------------------------------------------
Utilizaremos o tsc para compilar os nossos arquivos
com o comando [ npx tsc [nomedoarquivo].ts ]
-------------------------------------------------
Criaremos na raiz do projeto o arquivo:
-------------------------------------------------
index.ts
function greet(name: string){
    return `Olá ${name}`;
}

console.log(greet('Luiz Otávio'));
-------------------------------------------------

Para que a gente compile o index.ts damos o comando:
npx tsc index.ts [ ENTER ]

Esse comando irá pegar o que tem dentro de index.ts
compilar e gerar um arquivo na mesma pastas chamado
index.js
-------------------------------------------------
O typescript tem 2 modos de operação:

1.Script Mode - O arquivo js gerado é como se tivesse
usado os dois códigos em um único arquivo. Mais
especificamente no arquivo TypeScript.

Exemplo:
-------------------------------------------------
index.ts
const nome = 'Lucas';
-------------------------------------------------
npx tsc index.ts [ ENTER ] Gerou ->
-------------------------------------------------
index.js
const nome = 'Lucas';
-------------------------------------------------
A partir daqui seria como se tivesse assim:
index.ts
const nome = 'Lucas';
const nome = 'Lucas';
-------------------------------------------------
Ai o index.ts reclamaria isso:
Cannot redeclare block-scoped variable 'nome'
-------------------------------------------------
Não redeclare uma variável de escopo bloqueante
como a const no mesmo arquivo.
-------------------------------------------------
99% dos casos utiliza-se o:
-------------------------------------------------
2. Module Mode - Se eu exporto ou importo alguma 
coisa no index.ts automaticamente mudamos do 
Script Mode para o Module Mode.

Exemplo:
-------------------------------------------------
index.ts
const nome = 'Lucas';

export default nome;
-------------------------------------------------

Instalando o ts-node e Code Runner:

Para executar no VsCode:

npm i ts-node -D [ ENTER ]

Vamos em extensões e digitamos Code Runner
caso não o tenha instalado no VsCode

Criamos uma pasta chamada: .vscode
-> E dentro dela criamos o arquivo:

settings.json

E dentro dele:
{
    "code-runner.executorMap": {
        "typescript" : "npx ts-node --files --trans",
    }
}

Verificar se o ts-node no path do windows
-------------------------------------------------
Usamos então para compilar os ts:
npx tsc -w
-------------------------------------------------
Eslint Install para o TypeScript
Instalar a extensão Eslint no VsCode.
npm i eslint -D [ ENTER ]
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D [ ENTER ]

Criar o arquivo na raiz do projeto
.eslintrc.js
-------------------------------------------------
Com o conteúdo:
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends:[
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},

}
Damos reload no visual studio com a extensão
Reload. E o eslint começa a funcionar para o 
TypeScript.
-------------------------------------------------
Instalando e configurando o Prettier:
Com o cmd na raiz do projeto:
npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Após isto na raiz do projeto vamos em eslintrc.js e alterar:
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends:[
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},

}

Criamos então um arquivo na raiz do projeto:

.prettierrc.js

Com o conteúdo:
module.exports = {
    semi: true, // ponto e vírgula no final
    trailingComa: 'all',
    singleQuote: true,
    printWidth: 120, // largura máxima para quebrar a linha
    tabWidth: 2,
}
-------------------------------------------------

Vamos na pasta raiz do projeto e damos o comando
npx tsc --init

E ele criará na raiz do projeto o arquivo:

tsconfig.json

Então alteramos nas linhas onde tem, para:
"lib": ["ESNext","DOM"],  

Crio na Raiz do Projeto a pasta src
E altero em tsconfig.json para:
"outDir": "./dist",  // Os arquivos compilados vão para dist

"strict": true // Caso estejamos mexendo em um código antigo
// é interessante deixar strict como false, pois ele adiciona
// várias formas de mostrar que tem algo errado enquanto se digitamos
// e no caso do código já ter sido desenvolvido pode ser
// que apareçam muitos erros, então em códigos mais prontos
// legado tiremos o strict deixando-o como false

No final do arquivo após o fechamento da chave do
adicionar:

"compilerOptions":{

},
"include":[
    "./src"
]

Rodamos o comando na raiz

npx tsc

Para ver se vai efetuar o processo de gerar o JS
na pasta src ou dist.

Buscar arrumar a questão do CodeRunner
pois não está conseguindo retornar
o TypeScript como uma saída no terminal

