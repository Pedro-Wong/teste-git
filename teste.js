var valores = [];
var x = 0;
var y = 0;
for (var cont = 0; cont < 8; cont++) {
    var entrada = Number(prompt("Entre com o pre\u00E7o do ".concat(cont + 1, " produto")));
    valores[cont] = entrada;
}
;
for (var controle = 0; controle < valores.length - 1; controle++) {
    var carrega = valores[0];
    if (carrega < valores[controle + 1]) {
        x = valores[valores.length - 1];
        valores[valores.length - 1] = valores[controle + 1];
        valores[controle + 1] = x;
        console.log(valores);
    }
    ;
}
;
