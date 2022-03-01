const pessoa = {
    nome: "Luis",
    idade: 21,
    fones: ["213223323", "1212323454"]
}

pessoa.dependentes = {
    nome: "Antonio",
    parentesco: "filho",
    dataNasc: "15/07/2023"
}

console.log(pessoa)

pessoa.dependentes.nome = "Antonio da Silva";

console.log(pessoa)