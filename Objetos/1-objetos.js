const Aluno = {
    nome: "Luis",
    idade: 21,
    matricula: "493458",
    semestre: 5
}

console.log(`Meu nome eh: ${Aluno.nome}, tenho ${Aluno.idade} anos e estou no ${Aluno.semestre} semestre`);

console.log(Aluno.matricula.substring(0, 3) + `***`)