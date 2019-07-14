var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var indice = 0; indice < pacientes.length; indice++) 
{
    var paciente = pacientes[indice];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEhValido = true;
    alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) 
    {
        pesoEhValido = false;
        tdImc.textContent = "Peso é inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) 
    {
        alturaEhValida = false;
        tdImc.textContent = "Altura é inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido == false && alturaEhValida == false) 
    {
        tdImc.textContent = "Altura e peso inválidos!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida)
    {
        tdImc.textContent = calculaImc(peso,altura);
    }
}

function calculaImc(peso,altura)
{
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}