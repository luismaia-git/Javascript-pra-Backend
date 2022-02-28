// var altura = 5;

// var comprimento = 7;

// var area = altura * comprimento;

// console.log(area);

//truthy and falsy


// let minhaVar;

// let meuNull = null;

// const usuarioLogado = true;

// if (usuarioLogado == 1) {
//     console.log("Usuario esta logado\n")
// }

// console.log(minhaVar);
// console.log(meuNull + "\n");
// console.log(typeof usuarioLogado)



//conversao implicita


const numero = 456;
const numeroString = "456";

console.log(numero == numeroString + "\n");

//conversao explicita
//String()
//Number()


const numero2 = 456;
const numeroString2 = "456";

console.log(numero2 + numeroString2 + "\n");

const numero3 = 456;
const numeroString3 = "456";

console.log(numero3 + Number(numeroString3));

const numero4 = 456;
const numeroString4 = Number("456");

console.log(numero4 + numeroString4);