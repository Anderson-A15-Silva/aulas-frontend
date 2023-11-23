// Recebendo ID's dos Botões
var whiteMode = window.document.getElementById("claro");
var darkMode = window.document.getElementById("escuro");

// Recebendo ID's do Corpo e das Sessões
var body = window.document.getElementById("body");
var sectionO = window.document.getElementById("sectionOne");
var sectionT = window.document.getElementById("sectionTwo");

// Recebendo ID's dos Botões
var classDark = window.document.getElementById("escuro");
var classWhite = window.document.getElementById("claro");

// Adicionando Classes aos Elementos do HTML (Botões e Sessões)
sectionO.classList.toggle("section");
sectionT.classList.toggle("section");
classDark.classList.toggle("dk");
classWhite.classList.toggle("wt");

// Adicionando Verificação de Horário Atual
var horario = new Date();
var horas = horario.getHours();

// Realizando a Verificação e Mundando a Página Conforme as Condições
if (horas >= 6 && horas <= 22) {
    body.style.background = "#108787ff";
    body.style.color = "white";

    sectionO.style.background = "white";
    sectionT.style.background = "white";

    whiteMode.style.display = "none";
    darkMode.style.display = "block";
} else {
    body.style.background = "black";
    body.style.color = "gray";

    sectionO.style.background = "#3b3a3a";
    sectionT.style.background = "#3b3a3a";

    darkMode.style.display = "none"
    whiteMode.style.display = "block"
    whiteMode.style.background = "white"
}

// Formatação do CSS Através dos Clique nos Botões
darkMode.addEventListener("click", () => {
    body.style.background = "black";
    body.style.color = "gray";

    sectionO.style.background = "#3b3a3a";
    sectionT.style.background = "#3b3a3a";

    darkMode.style.display = "none"
    whiteMode.style.display = "block"
    whiteMode.style.background = "white"
});
whiteMode.addEventListener("click", () => {
    body.style.background = "#108787ff";
    body.style.color = "white";

    sectionO.style.background = "white";
    sectionT.style.background = "white";

    whiteMode.style.display = "none";
    darkMode.style.display = "block";
});





