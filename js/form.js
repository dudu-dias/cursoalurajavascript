var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obterDadosDoPaciente(form);
    var erros = validaPaciente(paciente);
    if(erros.length > 0)
    {
        exibeMensagensDeErros(erros);
        return;
    }
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});
function obterDadosDoPaciente(form)
{
    var paciente  = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value,form.altura.value)
        
    }
    return paciente;
}
function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.appendChild (montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild (montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild (montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild (montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild (montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}
function montaTd(dado,classe)
{
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente)
{
    var erros =[];

    if(paciente.nome.length  == 0)
    {
        erros.push("O nome não pode ser em branco!");
    }
    var valPeso = true;
    if(paciente.peso.length == 0)
    {
        erros.push("O peso não pode ser em branco!");
        valPeso = false;
    }
    var valAltura = true;
    if(paciente.altura.length == 0)
    {
        erros.push("A altura não pode ser em branco!");
        valAltura = false;
    }

    if(paciente.gordura.length == 0)
    {
        erros.push("A gordura não pode ser em branco!");
    }
    if(valPeso == true){
    if(!validaPeso(paciente.peso))
    {
        erros.push("O peso é inválido!");
    }
    }
    if(valAltura == true){
    if(!validaPeso(paciente.altura))
    {
        erros.push("A altura é inválido!");
    }
    }
    return erros;
 }
 function exibeMensagensDeErros(erros)
 {
     var ul = document.querySelector("#mensagens-erro")
     ul.innerHTML = "";
     erros.forEach(function(erro) {
         var li = document.createElement("li");
         li.textContent = erro;
         ul.appendChild(li);
     });
} 
