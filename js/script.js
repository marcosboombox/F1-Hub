console.log("F1 Hub iniciado!");
const campoPesquisa = document.getElementById("buscarPiloto");
if (campoPesquisa) {
    campoPesquisa.addEventListener("input", function () {
        const pesquisa = campoPesquisa.value.toLowerCase();
        const linhas = document.querySelectorAll(
            ".tabela-pilotos tbody tr"
        );
        linhas.forEach(function (linha) {
            const nomePiloto = linha.cells[1].textContent.toLowerCase();
            if (nomePiloto.includes(pesquisa)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }
        });
    });
}
// Destacar automaticamente a página atual no menu
const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {
    const paginaLink = link.getAttribute("href").split("/").pop();

    if (paginaLink === paginaAtual) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});