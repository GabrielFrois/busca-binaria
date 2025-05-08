// Importa o módulo 'fs' para manipulação de arquivos do sistema de arquivos
import * as fs from 'fs';
// Importa o módulo 'readline' para ler entrada do usuário via terminal
import * as readline from 'readline';


// Função para ler o conteúdo de um arquivo e retornar um array com as palavras
function lerArquivo(arquivo: string): string[] {
  // Lê todo o conteúdo do arquivo como string
  const conteudo = fs.readFileSync(arquivo, 'utf-8');
  // Divide o conteúdo em linhas, remove linhas vazias e retorna como array de strings
  const palavras = conteudo.split(/\r?\n/).filter(Boolean);
  return palavras;
}


// Função para realizar a busca binária no vetor de palavras
function buscaBinaria(palavras: string[], alvo: string): { posicao: number, passos: number } {
  let inicio = 0;                       // Índice inicial do vetor
  let fim = palavras.length - 1;       // Índice final do vetor
  let passos = 0;                      // Contador de comparações realizadas

  // Enquanto o intervalo de busca for válido
  while (inicio <= fim) {
    passos++;  // Incrementa o contador a cada iteração

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
  // Cria a interface de leitura para entrada e saída padrão (terminal)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Pergunta ao usuário o nome do arquivo
  rl.question('Digite o nome do arquivo: ', (arquivo) => {

    // Verifica se o arquivo existe
    if (!fs.existsSync(arquivo)) {
      console.log('Arquivo não encontrado.');
      rl.close();
      return;
    }

    // Lê o conteúdo do arquivo e armazena as palavras em um vetor
    const palavras = lerArquivo(arquivo);

    // Pergunta ao usuário qual palavra ele deseja buscar
    rl.question('Digite a palavra a ser buscada: ', (palavra) => {
      // Executa a busca binária com a palavra fornecida
      const resultado = buscaBinaria(palavras, palavra);

      // Exibe os resultados da busca
      if (resultado.posicao !== -1) {
        console.log(`Palavra encontrada na posição ${resultado.posicao}.`);
      } else {
        console.log('Palavra não encontrada.');
      }

      // Exibe o número de passos (comparações) realizados
      console.log(`Número de passos de comparação: ${resultado.passos}`);
      rl.close(); // Encerra a interface de leitura
    });
  });
}

// Executa a função principal
main();