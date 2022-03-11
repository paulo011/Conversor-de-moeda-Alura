
function Converter() {
    let valor = parseFloat(document.querySelector('#valor').value);
    let moeda = document.querySelector('#select').value;

    if(moeda == 'Dolar' && valor > 0){
        let convertido = valor * 5.01;
        document.querySelector('#valorConvertido').textContent = `O valor convertido de Dolar para reais é ${convertido}`
    }else if(valor > 0){
        let convertido = valor * 5.54;
        document.querySelector('#valorConvertido').textContent = `O valor convertido de euro para reais é ${convertido}`
    } else{
        document.querySelector('#valorConvertido').textContent = 'ERROR: Valor invalido'
    }
}