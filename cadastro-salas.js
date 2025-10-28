document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-sala");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nomeSala").value;
        const capacidade = document.getElementById("capacidade").value;
        const tipo = document.getElementById("tipoSala").value;

        if (!nome || !capacidade || !tipo) {
            alert("Preencha todos os campos antes de salvar!");
            return;
        }

        const salas = JSON.parse(localStorage.getItem("salas") || "[]");
        salas.push({ id: Date.now(), nome, capacidade, tipo });

        localStorage.setItem("salas", JSON.stringify(salas));

        alert("Sala salva com sucesso!");
        form.reset();
    });
});
