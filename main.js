const formulario = document.getElementById('form-validar');
let formValido = false;
// Função para validar o formulário
function formularioValido(campoA, campoB) {
    const valor1 = campoA.value;
    const valor2 = campoB.value;
    // Verifica se os campos atendem aos requisitos
    if (valor1 < valor2) {
        return formValido = true;
    } else {
        return formValido = false;
    }
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('valor-a');
    const campoB = document.getElementById('valor-b');
    const mensagemSucesso = `Formulário válido, valor do campo B: <b>${campoB.value}</b> é maior do campo A: <b>${campoA.value}</b>`;

    formularioValido(campoA, campoB);

    if (formValido) {
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        // Limpa os campos do formulário
        campoA.value = "";
        campoB.value = "";
    } else {
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        // Limpa os campos do formulário
        campoA.value = "";
        campoB.value = "";
    }
})
