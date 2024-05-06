const form = document.querySelector('.hero__form');
const inputs = document.querySelectorAll('input');
const error = document.querySelectorAll('.form__error');
const labels = document.querySelectorAll('.form__label');
const errorImg = document.querySelectorAll('.error__img');

console.log(errorImg);

form.addEventListener('submit', (event) => {
  inputs.forEach((input, index) => {
    if (!input.validity.valid) {
      const label = labels[index].textContent;
      showError(input, index, label);
      event.preventDefault();
    }
  });
})

function showError(input, index, label) {
  if (input.validity.valueMissing) {
    error[index].textContent = `${label} cannot be empty`;
    errorImg[index].style.display = 'block';
  } else if  (input.validity.typeMismatch) {
    error[index].textContent = `invalid ${label}`;
    errorImg[index].style.display = 'block';
  }
}
