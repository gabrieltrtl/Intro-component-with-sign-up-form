const form = document.querySelector('.hero__form');
const inputs = document.querySelectorAll('input');
const error = document.querySelectorAll('.form__error');
const labels = document.querySelectorAll('.form__label');
const errorImg = document.querySelectorAll('.error__img');


form.addEventListener('submit', (event) => {
  inputs.forEach((input, index) => {
    if (!input.validity.valid) {
      const label = labels[index].textContent;
      showError(input, index, label);
      event.preventDefault();
    } else {
      clearError(index);
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

function clearError(index) {
  error[index].textContent = '';
  errorImg[index].style.display = 'none';
}
