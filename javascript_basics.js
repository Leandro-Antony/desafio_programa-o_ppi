const a = [1, "Leandro", true];

console.log(a);

const fruits = ["Banana", "Orange", "Apple", "Amendoim", "Mango"];
const fruits2 = ["Kiwi", "Lemon", "Melon", "Blueberry"];

//console.log(fruits.length)
//console.log(fruits[0])

console.log(fruits);

//fruits.push("Watermelon") //Insere elementos no final da array
//console.log(fruits)
//
//fruits.pop()
//console.log(fruits) //Remove o último elemento
//
//fruits.unshift("Goiaba") //Insere elementos no começo da array
//console.log(fruits)
//
//fruits.shift() //Remove o primeiro elemento
//console.log(fruits)

//console.log(fruits.concat(fruits2)) //Concatenar arrays

//fruits.splice(2, 1, "Tangerine") //Apaga elemento no index 2, quantidade de elementos e pode até substituir por alguma outra coisa
//console.log(fruits)

//console.log()

//fruits.splice(fruits.indexOf("Banana"), 1, "Tangerine") //Apaga elemento "Banana", quantidade de elementos e pode até substituir por alguma outra coisa

//console.log(fruits)
//console.log(fruits2)
//fruits.splice(2, 1, ...fruits2)
//console.log(fruits)

//let fruits3 = ["Tangerine", ...fruits];
//console.log(fruits3)

const numbers = [9, 2, 8, 77, 10];
numbers.toSorted((a, b) => a - b); // função para o ordenamento crescente de números
console.log(numbers.toSorted((a, b) => a - b));

numbers.toSorted((a, b) => b - a); //Função para ordenamento decrescente de números
console.log(numbers.toSorted((a, b) => b - a));

// Max e min? Só ordenar e pegar o primeiro ou último item
console.log(numbers.toSorted((a, b) => a - b)[0]); //min
console.log(numbers.toSorted((a, b) => a - b)[numbers.length - 1]); //max

//console.log(fruits)
//console.log(fruits.toSorted()) //Ordena alfabeticamente uma array de strings

//numbers.reverse();
//console.log(numbers);

//let n = [];
//
//for(let i = 0; i<numbers.length; i++) {
//    n.push(numbers[i]*2);
//}
//
//console.log(n);
//
//function funcao(value, index, array) { //cria função(callback fucnctions) que recebe como parâmetro o valor e dobra ele
//    return value * 2
//}
//
//console.log(numbers.map(funcao)); //Mapeia a array numbers e com a função criada acima, ela percorre todos os elementos e dobra
//
////Arrowfunctions
//
//
//
//console.log("\n\n\n\n\n")
//console.log(numbers)
//console.log(numbers.map((n) => { //Mapeia a array numbers. Pegar o elemento e retornar n * 2, tudo isso com arrow functions
//    return n * 2;
//} ));
//console.log(numbers)  // Observe como o map não altera a array original.
//
//
//console.log(numbers.map((n) => n * 2));//Mapeia a array numbers. Pegar o elemento e retornar n * 2, tudo isso com arrow functions
//
//
//const numbers2 = numbers.map((n) => n * 2); // Criando uma array nova, para guardar o map do 'numbers'
//
//console.log(numbers2);
//
//console.log(fruits);
//console.log(fruits.find((fruit) => fruit[0].toLowerCase() === "a")); // Realiza uma consulta na array para um item que comece com a letra desejada, no caso A
//
console.log(fruits.findIndex((fruit) => fruit[0].toLowerCase() === "a")); // Realiza uma consulta na array para o index do item que comece com a letra desejada, no caso A
//
//const fruits3 = [...fruits, ...fruits2];
//
//console.log(fruits3);
// let letra = "m";
// //let out = [];
// //fruits3.map((fruta) => {  // Joga todos os itens que iniciam com 'm'em out
// //  if (fruta[0].toLowerCase() === letra) {
// //    out.push(fruta);
// //  }
// //});
// //
// //console.log(out);
// console.log(fruits3)
// console.log(fruits3.filter((fruit) => fruit[0].toLowerCase() === letra)); // Joga todos os itens que iniciam com 'm'em out
//
//console.log(fruits3.filter((fruit) => fruit.toLowerCase().startsWith(letra))); // Joga todos os itens que iniciam com 'm'em out

//let soma = 0;
//for (let i = 0; i < numbers.length; i++) {
//  //Pega todos os elementos em numbers e soma eles
//  soma += numbers[i];
//}
//console.log(soma);

//soma = 0;
//numbers.map((number) => (soma += number)); //Pega todos os elementos em numbers e soma eles
//console.log(soma);

//console.log(numbers.reduce(acc, value, i, array)); <---- A reduce usa como parÂmetros: acumulador, valor, índice e a array
//console.log(numbers.reduce((soma, number) => soma + number)); //Pega todos os elementos em numbers e soma eles

// OBJETOS

// const pessoa = {
//   //Cria um objeto
//   nome: "Leandro",
//   idade: 19,
//   profissao: "Estudante",
//   //saudacao: () => `Olá, meu nome é ${this.nome}`, //Arrow functions criam um escopo invisível para o objeto, não é possível acessar um item no objeto usando this
//   saudacao: function () {
//     return `Olá, meu nome é ${this.nome}!`; // `` template strings, Imprime do mesmo jeito que você escreveu. (enter "", '', etc. Escreve no literal)
//   },
//   bomdia() {
//     return `Bom dia, pessoal`;
//   }, // 2° forma de fazer um método dentro do objeto
// };

// console.log(pessoa); //Exibe todos os atributos do objeto

// console.log(pessoa.nome); //Exibe um atributo específico, no caso 'nome'
// console.log(pessoa["nome"]); //Exibe um atributo específico, no caso 'nome'

// console.log(Object.keys(pessoa)); //Exibe todos as chaves do objeto
// console.log(Object.values(pessoa)); //Exibe todos os valores atribuídos as chaves do objeto

// pessoa.disciplina = "PPI"; //Adiciona uma nova chave e valor ao objeto criado
// console.log(pessoa);

// console.log(pessoa.saudacao());

// pessoa.aniversario = function () {
//   //Adiciona um método no objeto
//   this.idade++;
//   return `Feliz aniversário! Agora eu tenho ${this.idade} anos!`;
// };

// console.log(pessoa.aniversario()); //Executa a função aniversário

// console.log(pessoa.idade); // Mostra q o valor realmente foi atualizado

// console.log(pessoa.bomdia()); //Executa a função bomdia

// //CONSTRUTORES

// function Pessoa(nome, idade, profissao) {
//   this.nome = nome;
//   this.idade = idade;
//   this.profissao = profissao;
//   this.saudacao = function () {
//     return `Olá, meu nome é ${this.nome}!`;
//   };
//   this.aniversario = function () {
//     this.idade++;
//     return `Feliz aniversário! Agora tenho ${this.idade} anos!`;
//   };
// }

// // Instanciando um objeto com o construtor
// const p1 = new Pessoa("May", 19, "Estudante");
// console.log(p1);

// const p1_e = {
//   //Pega todos os atributos de p1 e cria um novo objeto porém com um atributo a mais
//   ...p1,
//   email: "may@gmail.com",
// };

// console.log(p1_e); //Exibe o novo objeto

// console.log(p1_e.email);

// const { nome, email } = p1_e; // Atribuição por desestruturação
// console.log(nome, email);
