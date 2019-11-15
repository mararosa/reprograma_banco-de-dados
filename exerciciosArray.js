const comidas = [
  'Batata frita',
  'Hamburguer',
  'Sorvete de chocolate',
  'Saladinha delicia'
]

// 01: Selecione apenas a batatinha

const batatatinha = comidas.find(comida => comida === "Batata frita")
console.log('*** batatinha:', batatatinha)

// 02: Selecione apenas as comidas que comecem com `s` ou `b`

const comidasComSOuB = comidas.filter(comida => (/^s|^b/i).test(comida))
console.log('*** comidasComSOuB:', comidasComSOuB)

// 03: transforme a lista de comidas em comidas divertidas (adicione uma carinha feliz nelas)

const comidas2 = [
  { nome: 'Batata frita', vegano: true },
  { nome: 'Hamburguer', vegano: false },
  { nome: 'Sorvete de chocolate', vegano: false },
  { nome: 'Saladinha delicia', vegano: true }
]

const comidasFelizes = comidas.map(comida => comida + ' xD ' )
console.log(comidasFelizes)
// 04: Selecione apenas as comidinhas veganas.

// 05: Selecione apenas a primeira comidinhas vegana do cardápio.