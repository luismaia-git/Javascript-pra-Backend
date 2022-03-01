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


function oferecerSeguro(obj) {
    const propsPessoa = Object.keys(obj);
    if (propsPessoa.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}


console.log(Object.values(pessoa))

console.log(Object.entries(pessoa))


const listaOb = Object.entries(pessoa)


console.log(listaOb[0][1])

oferecerSeguro(pessoa)