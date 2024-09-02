function regraDeTres(params) {
    var entrada1 = parseFloat(document.getElementById('entrada1').value);
    var entrada2 = parseFloat(document.getElementById('entrada2').value);
    var entrada3 = parseFloat(document.getElementById('entrada3').value);

    if (!isNaN(entrada1) && !isNaN(entrada2) && !isNaN(entrada3) && entrada2 !== 0) {
        var resultado = (entrada3 * entrada2)/entrada1;
        document.getElementById('resultado').value = resultado.toFixed(2);
    }
    else{
        alert('Insira valores válidos!')
    }
}

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile_menu');
    mobileMenu.classList.toggle('show');
}

function mostrarTelefone(itemId) {
    var telefone = document.getElementById('numero-telefone-' + itemId);
    var item = document.getElementById(itemId);
    var imgContainer = item.querySelector('.img-container');

    if (telefone.classList.contains('hidden')) {
        telefone.classList.remove('hidden');
        imgContainer.classList.add('show-blur');
    }
    else{
        telefone.classList.add('hidden');
        imgContainer.classList.remove('show-blur');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const form = document.getElementById('message-form');

    function aplicarMascaraCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return cpf;
    }

    function aplicarMascaraTelefone(telefone) {
        telefone = telefone.replace(/\D/g, '');
        telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2');
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
        return telefone;
    }

    cpfInput.addEventListener('input', function () {
        cpfInput.value = aplicarMascaraCPF(cpfInput.value);
    });

    telefoneInput.addEventListener('input', function () {
        telefoneInput.value = aplicarMascaraTelefone(telefoneInput.value);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Mensagem enviada.')
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const abrirModal = document.getElementById('abrirModal');
    const closeModal = document.querySelector('.close');

    abrirModal.addEventListener('click', function() {
        modal.style.display = 'flex';
});

    closeModal.addEventListener('click', function(){
        modal.style.display = 'none';
});

window.addEventListener ('click', function(event){
    if(event.target===modal){
        modal.style.display = 'none';
    }
});
});