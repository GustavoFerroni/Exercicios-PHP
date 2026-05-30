function mostrarExercicio(numero) {
    // Esconde todos os exercícios
    const exercicios = document.querySelectorAll('.exercicio');
    exercicios.forEach(function(ex) {
        ex.style.display = 'none';
    });

    const exercicio = document.getElementById('ex' + numero);
    if (exercicio) {
        exercicio.style.display = 'block';
    }

    const botoes = document.querySelectorAll('.btn-ex');
    botoes.forEach(function(btn) {
        btn.classList.remove('ativo');
    });

    const botaoAtivo = document.querySelector('.btn-ex[data-ex="' + numero + '"]');
    if (botaoAtivo) {
        botaoAtivo.classList.add('ativo');
    }

    const conteudo = document.querySelector('.conteudo');
    if (conteudo) {
        conteudo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const algumAtivo = document.querySelector('.exercicio[style*="block"]');
    if (!algumAtivo) {
        mostrarExercicio(1);
    }
});