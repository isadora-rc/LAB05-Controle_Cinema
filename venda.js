document.addEventListener("DOMContentLoaded", () => {
    const selectSessao = document.getElementById("sessaoSelect");
    const form = document.getElementById("form-ingresso");

    const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");

    const sessaoSelecionada = localStorage.getItem("sessaoSelecionada");


    sessoes.forEach(sessao => {
        const option = document.createElement("option");
        option.value = sessao.id;

        const filme = filmes.find(f => f.id == sessao.idFilme);
        const sala = salas.find(s => s.id == sessao.idSala);

        option.textContent = `${filme ? filme.titulo : "Filme"} - ${sala ? sala.nome : "Sala"} - ${sessao.dataHora}`;
        selectSessao.appendChild(option);
    });


    if (sessaoSelecionada) {
        selectSessao.value = sessaoSelecionada;
        localStorage.removeItem("sessaoSelecionada");
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const idSessao = selectSessao.value;
        const nomeCliente = document.getElementById("nomeCliente").value;
        const cpf = document.getElementById("cpf").value;
        const assento = document.getElementById("assento").value;
        const pagamento = document.getElementById("tipoPagamento").value;

        const ingressos = JSON.parse(localStorage.getItem("ingressos") || "[]");

        ingressos.push({ id: Date.now(), idSessao, nomeCliente, cpf, assento, pagamento });

        localStorage.setItem("ingressos", JSON.stringify(ingressos));

        alert("Ingresso vendido com sucesso!");
        form.reset();
    });
});
