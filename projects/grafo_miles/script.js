document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 1000); // Aguarda o fade-out antes de remover do DOM
    }, 5000); // Tempo máximo de 5 segundos
});


// 🔹 Alterna a exibição da caixa de informações ao clicar no botão
function toggleInfo() {
    var infoBox = document.getElementById("infoBox");
    if (infoBox.style.display === "none" || infoBox.style.display === "") {
        infoBox.style.display = "block";
    } else {
        infoBox.style.display = "none";
    }
}

function toggleLegend() {
    let legend = document.getElementById("legend");
    let legendList = document.getElementById("legendList");

    if (legend.classList.contains("closed")) {
        legend.classList.remove("closed");
        legendList.style.display = "block";
    } else {
        legend.classList.add("closed");
        legendList.style.display = "none";
    }
}

// 🔹 Alterna a exibição da caixa de informações e o fundo escuro
function toggleInfo() {
    document.getElementById("infoBox").style.display = 
        (document.getElementById("infoBox").style.display === "none" || document.getElementById("infoBox").style.display === "") ? "block" : "none";

    document.getElementById("infoOverlay").style.display = document.getElementById("infoBox").style.display;
}

function toggleInfo() {
    document.getElementById("infoBox").style.display = 
        (document.getElementById("infoBox").style.display === "none" || document.getElementById("infoBox").style.display === "") ? "block" : "none";

    document.getElementById("infoOverlay").style.display = document.getElementById("infoBox").style.display;
}

// Exibir seção e mostrar botão de voltar
function showContent(section) {
    document.querySelectorAll('.info-content').forEach(el => el.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    document.getElementById("menu").style.display = 'none';
    document.querySelector(".back-menu").style.display = 'block';
}

// Voltar ao menu principal
function showMenu() {
    document.querySelectorAll('.info-content').forEach(el => el.style.display = 'none');
    document.getElementById("menu").style.display = 'block';
    document.querySelector(".back-menu").style.display = 'none';
}



