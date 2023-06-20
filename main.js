$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        var novaTarefa = $('#tarefa-descricao').val();
        $('ul').append('<li>' + novaTarefa + '<i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i> </li>');
        
        $('ul').on('click','.fa-check', function(){
            $(this).parent('li').toggleClass('checked');
        });

        $('ul').on('click','.fa-trash', function(){
            $(this).parent('li').fadeOut(200);
        });

        $('#tarefa-descricao').val('');
        
    });

});