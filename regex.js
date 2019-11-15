// 01: faça uma função que retorne se uma dada string contém a letra h nela

function retornarString (palavra) {
    const regex = /h/
    return regex.test(palavra)
}

const resultado = retornarString('baby shark')
console.log(resultado)

// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)

function retornarString2 (palavra) {
    const regex = /h/i
    return regex.test(palavra)
}

const resultado2 = retornarString2('Hello')
console.log(resultado2)


// 03: altere sua função para que ela retorne se a string
// termina com `a` ou comece com `b`
// aceitando maiuscula e minuscula tambem


function retornarString3 (palavra) {
    const regex = /a$|^b/i
    return regex.test(palavra)
}

const resultado3 = retornarString3('bambu')
console.log(resultado3)
 
// DESAFIO: altere sua função pra verificar se a string contem números
///[0-9]+/
//ou const regex /\d/ => busca digitos

function retornarString4 (palavra) {
    const regex = /[0-9]/
    return regex.test(palavra)
}

const resultado4 = retornarString4('bambu')
console.log(resultado4)