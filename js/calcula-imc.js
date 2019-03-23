var titulo = document.querySelector(".titulo");
titulo.textContent="Aparecida Nutricionista";
var pacientes=document.querySelectorAll(".paciente");


for(var i=0 ; i < pacientes.length ; i++){
  paciente=pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido){
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaEhValida){
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if(!pesoEhValido && !alturaEhValida){
    paciente.classList.add("paciente-invalido");
    tdImc.textContent = "Peso e Altura inválidos!";
  }

  if (pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }

}

function validaPeso(peso){
  if(peso >=0 && peso<=1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >=0 && altura<=3.00){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura*altura);
  return imc.toFixed(2);
}


//titulo.addEventListener("click", function(){
//  console.log("Olá posso chamar uma função anônima");
//});

//titulo.addEventListener("click", mostraMensagem);

//function mostraMensagem(){
//  console.log("Olá eu fui clicado");
//}
