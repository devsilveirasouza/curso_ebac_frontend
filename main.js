const formulario = document.getElementById('form-validar');

// console.log(formulario)

function formularioValido(v1, v2) {
    if (v1 < v2) {
        alert('Formulário valido')
    } else {
        alert('Formulário inválido')
    }
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const v1 = document.getElementById('valor-a').value;
    const v2 = document.getElementById('valor-b').value;
    
    formularioValido(v1, v2);
})
