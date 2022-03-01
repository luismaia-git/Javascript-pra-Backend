const Aluno = {
    nome: "Luis",
    idade: 21,
    matricula: "493458",
    semestre: 5
}

const chaves = ["nome", "idade", "matricula", "semestre"];

// console.log(Aluno[chaves[0]]);

chaves.forEach(info => console.log(Aluno[info]));