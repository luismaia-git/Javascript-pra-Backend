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

let relatorio = "";

for (let info in pessoa) {
    if (typeof pessoa[info] === "object" || typeof pessoa[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info}:${pessoa[info]}
        `
    }

}

console.log(relatorio);