const {print, calcularSaldoVitorias, calcularNivel} = require('./funcoes');

let saldoVitorias = calcularSaldoVitorias(70,10);
let nivel = calcularNivel(saldoVitorias);

print("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
