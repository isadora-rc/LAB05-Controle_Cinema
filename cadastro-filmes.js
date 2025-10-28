// CADASTRO DE FILMES
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-filme");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const descricao = document.getElementById("descricao").value;
        const genero = document.getElementById("genero").value;
        const classificacao = document.getElementById("classificacao").value;
        const duracao = document.getElementById("duracao").value;
        const estreia = document.getElementById("dataEstreia").value; 

        const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");

        //verifica se todos os campos foram preenchidos
        if (!titulo || !descricao || !genero || !classificacao || !duracao || !estreia) {
            alert("Preencha todos os campos antes de salvar!");
            return;
        }

        filmes.push({ id: Date.now(), titulo, descricao, genero, classificacao, duracao, estreia });

        localStorage.setItem("filmes", JSON.stringify(filmes));

        alert("Filme salvo com sucesso!");
        form.reset();
    });
});
