var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});

//paciente.forEach(function(paciente){
//      paciente.addEventListener("dblclick", function(){
//      this.remove();
//      });
//});
