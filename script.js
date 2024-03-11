function converter() {
    var tipoConversao = document.getElementById('tipoConversao').value;
    var medida = parseFloat(document.getElementById('medida').value);
    
    if (isNaN(medida)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    var resultado;
    if (tipoConversao === "quilometrosParaCentimetros") {
        resultado = medida * 100000;
        document.getElementById('resultado').textContent = medida + " quilômetros são " + resultado + " centímetros.";
    } else if (tipoConversao === "centimetrosParaQuilometros") {
        resultado = medida / 100000;
        document.getElementById('resultado').textContent = medida + " centímetros são " + resultado + " quilômetros.";
    } else if(tipoConversao === "metrosParaQuilometros"){
       resultado = medida /1000;
       document.getElementById('resultado').textContent = medida + " Metros " + resultado + " quilômetros.";
    } else if(tipoConversao === "kmParaMetros"){
        resultado = medida *1000;
        document.getElementById('resultado').textContent = medida + " Km " + resultado + " Metros.";    
    } else if(tipoConversao === "grausParaFarenheit"){
        resultado = (9/5) * medida + 32;
        document.getElementById('resultado').textContent = medida + " Celsius " + resultado + " Farenheit.";    
    }else if(tipoConversao === "farenheitParaCelsius"){
        resultado = (5/9) * (medida - 32);
        resultado = resultado.toFixed(2);
        document.getElementById('resultado').textContent = medida + " Farenheit " + resultado + " Celsius.";    
        
    }
}
function atualizarPlaceholder() {
    var tipoConversao = document.getElementById('tipoConversao').value;
    var placeholderTexto = (tipoConversao === "quilometrosParaCentimetros") ? "Insira a quantidade em quilômetros" : "Insira a quantidade em centímetros";
    document.getElementById('medida').setAttribute('placeholder', placeholderTexto);
}
// Atualizar o placeholder quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    atualizarPlaceholder();
});
