function calcularNivel(saldoVitorias) {
    
    if ( saldoVitorias < 10) {
        nivel = "Ferro";
        return nivel;
    } else if ( saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
        return nivel;
    } else if ( saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
        return nivel;
    } else if ( saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
        return nivel;
    } else if ( saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
        return nivel;
    } else if ( saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
        return nivel;
    } else if ( saldoVitorias >= 101)  {
        nivel = "Imortal";
        return nivel;
    }
    
}

function calcularSaldoVitorias(vitorias, derrotas) {
    resultado = vitorias - derrotas;
    return resultado;
}


function print(texto) {
    console.log(texto);
}

module.exports = {print, calcularSaldoVitorias, calcularNivel};