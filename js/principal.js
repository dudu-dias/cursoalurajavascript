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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});