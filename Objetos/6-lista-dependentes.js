const pessoa = {
    nome: 'Luis',
    idade: 21,
    fones: ['213223323', '1212323454'],
    dependentes: [{
        nome: 'Antonio da Silva',
        parentesco: 'filho',
        dataNasc: '15/07/2023'
    }]
}

pessoa.dependentes.push({
    nome: 'Lucas da silva',
    parentesco: 'filho',
    dataNasc: '20/04/2024'
})

console.log(pessoa)

const filhoMaisNovo = pessoa.dependentes.filter(dependente => dependente.dataNasc === '20/04/2024');


console.log(filhoMaisNovo[0]);
console.log("=================");
console.log(filhoMaisNovo[0].nome);