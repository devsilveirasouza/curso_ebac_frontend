$("document").ready(function () {
    // CARROUSSEL
    $("#carroussel-imagens").slick({
        autoplay: true,
    });
    // MENU HAMBURGUER
    $(".menu-hamburguer").click(function () {
        $("nav").slideToggle();
    });
    // MASCARA NOS CAMPOS DO FORMULÁRIO
    $("#telefone").mask("(00) 0000-0000");
    $("#cep").mask("00000-000");
    $("#cpf").mask("000.000.000-00");

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cep: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cursoDeInteresse: {
                required: true,
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: "Por favor digite seu nome",
            email: "Insira um e-mail válido.",
            telefone: "Digite seu telefone para contato!",
            cep: "Digite seu CEP",
            endereco: "Digite seu endereço",
            cpf: "Digite seu cpf",
            cursoDeInteresse: "Favor informar o curso!",
            mensagem: "Digite sua mensagem!"
            },
            submitHandler: function (form) {
            console.log(form);
            },
            invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
    });
    // ROLAGEM ATÉ O FORMULÁRIO DE CONTATO E PREENCHIMENTO COM O CURSO DE CADATROS
    $('.lista-de-cursos button').click(function () {
        const destino = $('#contato');
        
        const nomeCurso = $(this).parent().find('h3').text();
        $('#cursoDeInteresse').val(nomeCurso);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)        
    })
});
