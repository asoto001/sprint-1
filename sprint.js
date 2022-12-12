const gastos = {
  mon: 31.55,
  tue: 66.12,
  wed: 99.9,
  thur: 60.21,
  fri: 41.50,
  sat: 89.99,
  sun: 53.88
}
const spanTextoUno = document.getElementById('span-mon')
const spanTextoDos = document.getElementById('span-tue')
const spanTextoTres = document.getElementById('span-wed')
const spanTextoCuatro = document.getElementById('span-thur')
const spanTextoCinco = document.getElementById('span-fri')
const spanTextoSeis = document.getElementById('span-sat')
const spantextoSiete = document.getElementById('span-sun')
const spanSuma = document.getElementById('sumass')

const valores = Object.values(gastos);

const total = valores.reduce((total, actual)=> total + actual, 0);
let resultado = 921 - total

console.log(total);
spanSuma.innerHTML = resultado;

spanTextoUno.innerHTML = gastos.mon;
spanTextoDos.innerHTML = gastos.tue;
spanTextoTres.innerHTML = gastos.wed;
spanTextoCuatro.innerHTML = gastos.thur;
spanTextoCinco.innerHTML = gastos.fri;
spanTextoSeis.innerHTML = gastos.sat;
spantextoSiete.innerHTML = gastos.sun;

console.log(gastos.wed);