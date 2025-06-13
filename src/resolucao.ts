import * as fs from 'fs';
import * as readline from 'readline';

// Função para ler o conteúdo de um arquivo e retornar um array com as palavras
function lerArquivo(arquivo: string): string[] {
  const conteudo = fs.readFileSync(arquivo, 'utf-8');
  const palavras = conteudo.split(/\r?\n/).filter(Boolean);
  return palavras;
}

// Função para realizar a busca binária no vetor de palavras
function buscaBinaria(palavras: string[], alvo: string): { posicao: number, passos: number } {
  let inicio = 0;
  let fim = palavras.length - 1;
  let passos = 0;

  while (inicio <= fim) {
    passos++;

    // Calcula o índice do meio do vetor
    const meio = Math.floor((inicio + fim) / 2);

    // Compara a palavra no meio com a palavra buscada
    const comparacao = palavras[meio].localeCompare(alvo);

    // Se for igual, retorna a posição e o número de passos
    if (comparacao === 0) {
      return { posicao: meio, passos };
    } 
    // Se a palavra do meio for menor, continua a busca na metade direita
    else if (comparacao < 0) {
      inicio = meio + 1;
    } 
    // Se for maior, continua a busca na metade esquerda
    else {
      fim = meio - 1;
    }
  }

  // Se não encontrar, retorna posição -1 e número de passos
  return { posicao: -1, passos };
}

// Função principal que executa o programa
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o nome do arquivo: ', (arquivo) => {

    if (!fs.existsSync(arquivo)) {
      console.log('Arquivo não encontrado.');
      rl.close();
      return;
    }

    const palavras = lerArquivo(arquivo);

    rl.question('Digite a palavra a ser buscada: ', (palavra) => {
      const resultado = buscaBinaria(palavras, palavra);

      if (resultado.posicao !== -1) {
        console.log(`Palavra encontrada na posição ${resultado.posicao}`);
      } else {
        console.log('Palavra não encontrada.');
      }

      console.log(`Número de passos de comparação: ${resultado.passos}`);
      rl.close();
    });
  });
}

main();