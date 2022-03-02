function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const luis = new ClientePoupanca("Luis", "312321312", "luismaia1407@gmail.com", 100, 1000)

console.log(luis)

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

luis.depositarPoup(30)

console.log("=================")
console.log(luis)