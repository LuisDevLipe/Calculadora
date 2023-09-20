function pgRazao(a1, an, n) {
  const expoente = n - 1
  const razao = radical(expoente, an / a1)
  return razao
}

function radical(indice, radicando) {
    if(fatorar(radicando).length === indice){
        const raiz = fatorar(radicando)[0]
        return raiz
    }
}

// console.log(pgRazao(3,9375,6))

function fatorar(quociente) {
  let primos = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
    197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307,
    311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
  ]
  let divisores = []
  while (quociente > 1) {
    if (quociente % primos[0] != 0) {
      if (primos.length === 0) return "Acabou a porra dos numeros primos.lol"
      primos.shift()
      continue
    } else {
      quociente /= primos[0]
      divisores.push(primos[0])
    }
  }
  return divisores 
}

// console.log(fatorar(10000))
// console.log(fatorar(125))
function fatorial(n) {
  if (n === 0) return 1
  else return n * fatorial(n - 1)
}

// console.log(fatorial(5))

function mdc () {
    let divisores = []
    for(i in arguments){
        divisores.push(
            fatorar(arguments[i])
        )
    }
    return divisores
}
console.log(mdc(4,25))