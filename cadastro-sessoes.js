document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-sessao");
    const selectFilme = document.getElementById("filmeSelect");
    const selectSala = document.getElementById("salaSelect");

    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");


    filmes.forEach(filme => {
        const option = document.createElement("option");
        option.value = filme.id;
        option.textContent = filme.titulo;
        selectFilme.appendChild(option);
    });


    salas.forEach(sala => {
        const option = document.createElement("option");
        option.value = sala.id;
        option.textContent = sala.nome;
        selectSala.appendChild(option);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const idFilme = selectFilme.value;
        const idSala = selectSala.value;
        const dataHora = document.getElementById("dataHora").value;
        const preco = parseFloat(document.getElementById("preco").value);
        const idioma = document.getElementById("idioma").value;
        const formato = document.getElementById("formato").value;


        if (!idFilme || !idSala || !dataHora || isNaN(preco) || preco < 0 || !idioma || !formato) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");

        sessoes.push({
            id: Date.now(),
            idFilme,
            idSala,
            dataHora,
            preco,
            idioma,
            formato
        });

        localStorage.setItem("sessoes", JSON.stringify(sessoes));

        alert("Sessão salva com sucesso!");
        form.reset();
        selectFilme.value = "";
        selectSala.value = "";
    });
});
