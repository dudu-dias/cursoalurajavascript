var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

pesoEhValido = true;
alturaEhValida = true;

if(peso <= 0 || peso >=1000)
{
    pesoEhValido = false;
    tdImc.textContent = "Peso é inválido!";
}

if(altura <= 0 || altura >= 3.00)
{
    alturaEhValida = false;
    tdImc.textContent = "Altura é inválida!";
}

if(pesoEhValido == false && alturaEhValida == false)
{
    tdImc.textContent = "Altura e peso inválidos!" ;
}

if(pesoEhValido && alturaEhValida)
{
    tdImc.textContent = peso / (altura * altura);
}