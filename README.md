# Exercício P.3.2. de Estrutura de Dados - Busca Binária

Este projeto demonstra uma implementação simples de **busca binária** em TypeScript. Ele lê um arquivo de texto contendo palavras (uma por linha), e permite ao usuário realizar buscas por palavras específicas utilizando o algoritmo de busca binária.

## Estrutura do Projeto

```
busca-binaria/
├── src/
│   ├── palavras.txt         # Arquivo com lista de palavras (52 linhas)
│   ├── mais-palavras.txt    # Arquivo com lista de palavras (261788 linhas)
│   └── resolucao.ts         # Código principal com a lógica de leitura e busca
├── package.json    
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Funcionalidades

- Leitura de um arquivo `.txt` com palavras.
- Algoritmo de **busca binária** com contagem de passos.
- Interface interativa no terminal usando `readline`.

## Instalação e Execução
1. Clone o repositório:
```bash
git clone https://github.com/GabrielFrois/busca-binaria.git
cd busca-binaria
```
2. Instale as dependências:
```bash
npm install
```
3. Execute o código:
```bash
npm run resolucao
```
4. Escolha um arquivo para o código ler:
  - `src/palavras.txt`
  - `src/mais-palavras.txt`

## Busca Binária
A busca binária é eficiente porque reduz o espaço de busca pela metade a cada passo, e o número de comparações feitas pode indicar essa eficiência.  
Em vez de procurar linha por linha (como na busca linear), a busca binária faz `log₂(n)` comparações no pior caso, onde `n` é o número total de palavras.

- **Passo 1:** Compara a palavra com o elemento do meio do vetor;
- **Passo 2:** Dependendo do resultado, vai para a metade superior ou inferior;
- **Passo 3:** Novamente compara com o meio da nova metade;
- Assim por diante até terminar as comparações.

## Exemplo
**Palavra:** Abacate

### Passo de Comparação 1:
- `meio = Math.floor((0 + 51) / 2) = 25`
- Palavra no índice 25 = "melancia"
- Compara "melancia" com "abacate"
- "melancia" vem depois de "abacate"
- Atualiza: fim = 24

### Passo de Comparação 2:
- `meio = Math.floor((0 + 24) / 2) = 12`
- Palavra no índice 12 = "gato"
- Compara "gato" com "abacate"
- "gato" vem depois de "abacate"
- Atualiza: fim = 11

### Passo de Comparação 3:
- `meio = Math.floor((0 + 11) / 2) = 5`
- Palavra no índice 5 = "cavalo"
- Compara "cavalo" com "abacate"
- "cavalo" vem depois de "abacate"
- Atualiza: fim = 4

### Passo de Comparação 4:
- `meio = Math.floor((0 + 4) / 2) = 2`
- Palavra no índice 2 = "bola"
- Compara "bola" com "abacate"
- "bola" vem depois de "abacate"
- Atualiza: fim = 1

### Passo de Comparação 5:
- `meio = Math.floor((0 + 1) / 2) = 0`
- Palavra no índice 0 = "abacate"
- Compara "abacate" com "abacate"

### Resultado:
- Posição no vetor: 0
- Número de passos de comparação: 5
