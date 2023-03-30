var array = [0,1,1]
var resultado = 1
var resposta = prompt('Qual número você deseja?')

while (resultado < resposta) {
  
    resultado = resultado + array[array.length-2]

    array.push(resultado);
    
}


if (resposta == array[array.length-1]) 
  console.log("Esse número pertence ao Fibonacci")
  else 
    console.log("Esse número não pertence ao Fibonacci")
  

console.log(array[array.length-1])
