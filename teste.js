var valores = [];
for (var cont = 0; cont < 8; cont++) {
    var entrada = Number(prompt("Entre com o pre\u00E7o do ".concat(cont + 1, " produto")));
    valores[cont] = entrada;
}
;
console.log(valores);
