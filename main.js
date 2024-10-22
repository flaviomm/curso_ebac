function comparar(e) {
    e.preventDefault(); 

    const campoA = parseFloat(document.querySelector('#campoA').value);
    const campoB = parseFloat(document.querySelector('#campoB').value);

    if (campoB > campoA) {
        alert('Formulário válido!');
        document.getElementById('campoA').value = "";
        document.getElementById('campoB').value = "";
    } else {
        alert('Formulário inválido! O número B deve ser maior que o número A.');
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', comparar);