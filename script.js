// Ano automático
document.getElementById("ano").textContent =
new Date().getFullYear();

// Mostrar mais
const botao = document.getElementById("mostrarMais");
const texto = document.getElementById("textoExtra");

botao.addEventListener("click", () => {

    if(texto.style.display === "block"){
        texto.style.display = "none";
        botao.textContent = "Mostrar Mais";
    } else {
        texto.style.display = "block";
        botao.textContent = "Mostrar Menos";
    }

});

// Tema escuro
document.getElementById("temaBtn")
.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Validação do formulário
document.getElementById("formContato")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    const mensagem =
    document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        document.getElementById("resultado")
        .textContent = "Preencha todos os campos!";
    }else{
        document.getElementById("resultado")
        .textContent = "Mensagem enviada com sucesso!";
    }

});