const items = document.querySelectorAll('.item');
const heartButtons = document.querySelectorAll('.heart-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const incrementButtons = document.querySelectorAll('.increment-btn');
const decrementButtons = document.querySelectorAll('.decrement-btn');
const quantityInputs = document.querySelectorAll('.quantity-input');
const totalPriceElement = document.querySelector('.total-price');

items.forEach((item, index) => {
  heartButtons[index].addEventListener('click', () => {
    heartButtons[index].classList.toggle('liked');
  });

  deleteButtons[index].addEventListener('click', () => {
    item.remove();
    updateTotalPrice();
  });

  incrementButtons[index].addEventListener('click', () => {
    const quantityInput = quantityInputs[index];
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
  });

  decrementButtons[index].addEventListener('click', () => {
    const quantityInput = quantityInputs[index];
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
      updateTotalPrice();
    }
  });

  quantityInputs[index].addEventListener('change', () => {
    updateTotalPrice();
  });
});

function updateTotalPrice() {
  let totalPrice = 0;
  items.forEach((item, index) => {
  const quantity = parseInt(quantityInputs[index].value);
  const price = parseInt(item.querySelector('.price').textContent.replace('Price: $', ''));
  totalPrice += quantity * price;
  });
  totalPriceElement.textContent = 'Total Price: $' + totalPrice;
}
