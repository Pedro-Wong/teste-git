let valores = [];

for(let cont = 0; cont < 8; cont++){
    let entrada = Number(prompt(`Entre com o preço do ${cont +1} produto`));
    valores[cont] = entrada
};
console.log(valores)