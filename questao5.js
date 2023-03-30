var resposta = prompt('Escreva uma palavra')
novapalavra = ''

for (var quantidade = resposta.length-1; quantidade > -1; quantidade --) {
  novapalavra = novapalavra + resposta[quantidade]
}

console.log(novapalavra)