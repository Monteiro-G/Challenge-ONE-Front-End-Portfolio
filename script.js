/*$(document).ready(function(){
    // Ao clicar no botão, revela ou oculta o conteúdo adicional
    $('#botao-mostrar-mais').click(function(){
        $('#conteudo-adicional').slideToggle();
    });
});*/

document.addEventListener('DOMContentLoaded', function () {
    var butoes = document.querySelectorAll('.botao-mostrar-mais');
    butoes.forEach(function (button) {
        button.addEventListener('click',function(){
            var conteudoAdicional = this.parentElement.nextElementSibling;
            if (conteudoAdicional.classList.contains('show')){
                conteudoAdicional.classList.remove('show');
                // para que o conteúdo seja totalmente escondido
                setTimeout(function () {
                    conteudoAdicional.style.maxHeight = '0';
                    conteudoAdicional.style.padding = '0';
                }, 10);
            } else{
                conteudoAdicional.style.maxHeight = '1000px';
                conteudoAdicional.style.padding = '10px 0';
                setTimeout( function() {
                    conteudoAdicional.classList.add('show');
                },10);
            };
        });
    });
});

