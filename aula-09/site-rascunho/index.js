var pNome = document.getElementById("pNome");
var nome = pNome;

var pIdade = document.getElementById("pIdade");
var idade = Number(pIdade);

var pSexo = document.getElementById("pSexo");
var sexo = Number(pSexo);

var pIQ = document.getElementById("pIQ");
var iq = pIQ;

var pFor = document.getElementById("pFor");
var forca = pFor;

var pVig = document.getElementById("pVig");
var vigor = pVig;

var pAgi = document.getElementById("pAgi");
var agilidade = pAgi;

var pInt = document.getElementById("pInt");
var intelecto  = pInt;

var pPre = document.getElementById("pPre");
var presenca = pPre;


function exibirValores() {
    console.log("Nome :", nome);
    console.log("Nome :", idade);
    console.log("Nome :", sexo);
    console.log("Nome :", iq);
    console.log("Nome :", forca);
    console.log("Nome :", agilidade);
    console.log("Nome :", intelecto);
    console.log("Nome :", presenca);
}

const exibirMenu = () => {
    let buttonIcon = window.document.getElementById("button-icone");
    let menu = window.document.querySelector("nav");

    buttonIcon.addEventListener('click', () => {
        menu.style.display = 'inline-block';
        menu.style.listStyle = 'none';
    })
}