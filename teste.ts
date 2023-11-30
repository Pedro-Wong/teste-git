let valores = [];
let x = 0;
let y = 0;

for(let cont = 0; cont < 8; cont++){
    let entrada = Number(prompt(`Entre com o preço do ${cont +1} produto`));
    valores[cont] = entrada;
};



for(let controle = 0; controle < valores.length-1; controle++){
    let carrega = valores[0];
    if(carrega < valores[controle + 1]){
        x = valores[valores.length-1]
        valores[valores.length-1] = valores[controle + 1];
        valores[controle +1] = x
        console.log(valores);
    };
};
