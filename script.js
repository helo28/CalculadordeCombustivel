let etanol, gasolina; // CRIANDO AS VÁRIAVEIS

function calcular() {
    // PARSE FLOAT É PARA TRANSFORMA O VALOR EM REAL
    etanol = parseFloat(formularioFlex.valorEtanol.value.replace("," , "."));// REPLACE TROCA A VÍRGULA POR PONTO NA HORA DA DIGITAÇÃO ISSO É MELHOR PARA PADRONIZAR
    gasolina = parseFloat(formularioFlex.valorGasolina.value.replace("," , ".")); // REPLACE TROCA A VÍRGULA POR PONTO NA HORA DA DIGITAÇÃO

    if (etanol <= (0.72 * gasolina)) {
        document.querySelector('#status').src = "img/alcool.png";
    }else {
        document.querySelector('#status').src = "img/gasolina.png";
    }
}

function limpar(){ 
    document.querySelector('#status').src = "img/neutro.png";
}