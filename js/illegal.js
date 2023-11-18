// Uso de JQuery para formatar os campos do formulário
$(document).ready(function () {
    $('#inputTelefone').mask('(00) 0000-0000');
    $('#inputCPF').mask('000.000.000-00');
    $('#inputCEP').mask('00.000-000');
});

// Função para consumir a API do IBGE
// Trazendo os dados dos estados e preencher o select