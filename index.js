//operador ternario

// const idadeMinima = 18;
// const idadeCliente = 16;

// if (idadeCliente >= idadeMinima) {
//     console.log("Cerveja")
// } else {
//     console.log("suco")
// }
//condicao                  true       false
// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");




// template String

// const nome = "Luis"
// const idade = 2022 - 2001;
// const cidade = "Fortaleza";
// const apresentacao = "meu nome eh " + nome + " minha idade eh " + idade + " e eu nasci em " + cidade;


// console.log(apresentacao)

// const nome = "Luis"
// const idade = 2022 - 2001;
// const cidade = "Fortaleza";
// const apresentacao = `meu nome eh ${nome} minha idade eh ${idade} e eu nasci em ${cidade}`;

// console.log(apresentacao)





//funcoes

// let x = "";
// console.log(x)
// x = "oi";
//string
// function imprimeTexto(texto) {
//     console.log(texto)
// }

// imprimeTexto("oi");

//outras formas de escrever funcoes

// function soma() {
//     const resultado = 2 + 2;
//     return resultado
// }

// function soma() {
//     return 2 + 2;
// }

// console.log(soma());

//parametros

// function soma(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 5));


//expressao de funcao

// const soma = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 5));

// function soma(num1, num2) {
//     return num1 + num2;
// }


//aula arrow function

//funcao classica
function apresentar(nome) {
    return `meu nome eh ${nome}`
}
//arrow function
const apresentarArrow = nome => `meu nome eh ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumeroPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
};

console.log(somaNumeroPequenos(3, 1));