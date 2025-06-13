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

    const meio = Math.floor((inicio + fim) / 2);
    const comparacao = palavras[meio].localeCompare(alvo);

    if (comparacao === 0) {
      return { posicao: meio, passos };
    } 
    else if (comparacao < 0) {
      inicio = meio + 1;
    } 
    else {
      fim = meio - 1;
    }
  }

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
        console.log(`Palavra encontrada no índice: ${resultado.posicao}`);
      } else {
        console.log('Palavra não encontrada.');
      }

      console.log(`Número de passos de comparação: ${resultado.passos}`);
      rl.close();
    });
  });
}

main();
