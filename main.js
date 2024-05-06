const form = document.querySelector('.hero__form');
console.log(form);
const inputs = document.querySelectorAll('input');
console.log(inputs);
const error = document.querySelectorAll('.form__error');
console.log(error);

form.addEventListener('submit', (event) => {
  console.log('Submissão Efetuada')
  inputs.forEach((input, index) => {
    if (!input.validity.valid) {
      console.log('Função de Erro Disparada');
      showError(input, index);
      event.preventDefault();
    }
  });
})

function showError(input, index) {
  if (input.validity.valueMissing) {
    console.log('Erro 1')
    error[index].textContent = "You need to put a input";
  } else if  (input.validity.typeMismatch) {
    console.log('Erro 2')
    error[index].textContent = "You need to fuck you";
  }
}
