const pessoa = [{
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
        ]
    },
    {
        nome: 'Antonio',
        idade: 35,
        fones: ['3123123', '432453454'],
        dependentes: [{
                nome: 'Silva',
                parentesco: 'filho',
                dataNasc: '30/02/2026'
            },
            {
                nome: 'Julio',
                parentesco: 'filho',
                dataNasc: '10/09/2027'
            }
        ]
    }
]

const listaDependentes = [...pessoa[0].dependentes, ...pessoa[1].dependentes]

console.table(listaDependentes)