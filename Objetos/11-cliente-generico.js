function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const luis = new Cliente("Luis", "312321312", "luismaia1407@gmail.com", 100)

console.log(luis)