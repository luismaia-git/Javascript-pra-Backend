const nomes = ['Luis', 'Antonio', 'Marcos'];

const notas = [7, 4, 9];

const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`);