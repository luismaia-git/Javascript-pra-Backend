// const nomes = ['Joao', 'Luis', 'Calos', 'Paulo', 'Luiz', 'Caio', 'Andre', 'Lara', 'Antonio'];

// console.log(`tamanho da array:${nomes.length}`);

// console.log("tamanho divido por 2:", nomes.length / 2);

// const sala1 = nomes.slice(0, nomes.length / 2);
// const sala2 = nomes.slice(4);

// console.log(`Alunos da sala 1: ${sala1}`);
// console.log(`Alunos da sala 2: ${sala2}`);


// const animais = ['baleia', 'cachorro', 'gato', 'camaleao', 'leao'];


// animais.splice(1, 0, 'mamaco');

// //[ 'baleia', 'mamaco', 'cachorro', 'gato', 'camaleao', 'leao' ]

// animais.splice(3, 2, 'leaodomar');

// console.log(animais);

// const animais = ['gato', 'camaleao', 'leao'];
// const animais2 = ['baleia', 'cachorro'];

// const novaLista = animais.concat(animais2);

// console.log(novaLista);

const alunos = ['Luis', 'Carlos', 'Tiago'];
const media = [10, 7, 8]

let listaDeNotasEAlunos = [alunos, media];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos.indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media eh' + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno nao existe'
    }
}

console.log(exibeNomeNota);