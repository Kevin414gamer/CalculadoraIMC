let botaoCalcular = document.getElementById('btncalcular');

function calculandoIMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");
  
  if(altura !== "" && peso !== ""){
  
  let imc = (peso / (altura * altura)).toFixed(1);
    let mensagem = "";
    
    if (imc < 18.5){
         mensagem = "Abaixo do peso!"
    }else if (imc < 25){
         mensagem = "Você está com o peso ideal!"
    }else if (imc < 30){
         mensagem = "Você está levemente acima do peso!"
    }else if (imc < 35){
         mensagem = "Cuidado, obesidade grau 1!"
    }else if (imc < 40){
      mensagem = "Cuidado, obesidade grau 2!"
    }else {
      mensagem = "Cuidado, obesidade grau 3!"
    }
  
 resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;
  }else{
 resultado.textContent = "Preencha todos os campos!";
  }
  
}

 botaoCalcular.addEventListener('click', calculandoIMC);