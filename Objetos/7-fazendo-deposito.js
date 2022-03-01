const pessoa = {
    nome: 'Luis',
    idade: 21,
    fones: ['213223323', '1212323454'],
    dependentes: [{
            nome: 'Antonio da Silva',
            parentesco: 'filho',
            dataNasc: '15/07/2023'
        },
        {
            nome: 'Lucas da silva',
            parentesco: 'filho',
            dataNasc: '20/04/2024'
        }
    ],
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    }
}

console.log(pessoa.saldo);

pessoa.depositar(30);

console.log(pessoa.saldo);