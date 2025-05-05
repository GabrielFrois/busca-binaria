# Exercícios P.3.2. de Estrutura de Dados

Desenvolva um programa que leia os dados de um arquivo de texto, contendo palavras em ordem alfabética, e que armazene cada uma das palavras em um vetor (cada elemento do vetor contém uma palavra).   
Depois de carregar os dados no vetor, o programa solicita ao usuário a digitação de uma palavra e então faz a busca binária e informa a posição da palavra no vetor.  
O programa também deve fornecer como saída o número de passos de comparação que foram efetuados até que a palavra seja encontrada.  
As entradas para o programa devem ser o arquivo de texto contendo as palavras em ordem alfabética e a palavra buscada.  
A saída o número de passos e em qual posição a palavra foi encontrada.

## Resolução 
- 1. Ler o arquivo e armazenar palavras num vetor: Usando o módulo fs para ler o arquivo e separar as palavras em um array.
- 2. Solicitar a palavra ao usuário: Usando o módulo readline para ler a palavra digitada.
- 3. Implementar a busca binária: Criar uma função que realize a busca binária e conte o número de comparações.
- 4. Resultados: Exiba a posição da palavra (ou uma mensagem se não for encontrada) e o número de comparações.
