$(document).ready(function() {
    var formVisible = false;

    function toggleForm() {
        $('#task-form').slideToggle();
        formVisible = !formVisible;
    }

    $('#toggleForm').click(function() {
        toggleForm();
    });

    $('#task-form').submit(function(event) {
        event.preventDefault();

        var taskName = $('#task-input').val(); // Obtém o valor do campo de entrada
        if (taskName.trim() === '') return; // Verifica se o campo está vazio ou contém apenas espaços em branco

        var listItem = $('<li>').text(taskName); // Cria um novo elemento <li> com o nome da tarefa
        $('#task-list').append(listItem); // Adiciona o novo item à lista

        $('#task-input').val(''); // Limpa o campo de entrada

        // Adiciona o efeito de linha ao clicar no item da lista
        listItem.click(function() {
            $(this).toggleClass('completed');
        });

        // Rola a página de volta para o topo
        $('html, body').animate({scrollTop: 0}, 'slow');

        // Adiciona um atraso para garantir que a rolagem seja concluída antes que a página retorne ao topo
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 800);
    });

    // Manipulador de evento para o botão de limpar
    $('#butCancel').click(function() {
        // Remove todos os itens da lista de tarefas
        $('#task-list').empty();
    });
});    