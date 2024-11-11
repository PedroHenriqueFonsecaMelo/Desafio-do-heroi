// Função para garantir que o valor não seja null e seja uma string válida
function obterEntrada(mensagem: string): string {
  const entrada = prompt(mensagem);
  if (entrada === null) {
    console.log("Entrada inválida ou ambiente não interativo. Tente novamente.");
    Deno.exit(); // Encerra o programa se a entrada for null
  }
  return entrada;
}

// Recebe o nome e a quantidade de XP do herói
const nome = obterEntrada("Digite o nome do herói:");  // Entrada do nome
const xpStr = obterEntrada("Digite a quantidade de XP:");  // Entrada do XP como string

// Converte XP para número inteiro
const xp = parseInt(xpStr);

// Verifica se o valor de XP é um número válido
if (isNaN(xp)) {
  console.log("A quantidade de XP deve ser um número válido.");
  Deno.exit(); // Encerra o programa se XP não for um número
}

// Variável para armazenar o nível
let nivel: string = "";

// Classificação do herói de acordo com o XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

// Exibe a mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
