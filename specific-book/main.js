// Модуль 8 (JS Basics):
// Використовуючи створену розмітку зі стилями для сторінки "Окрема книга" (specific-book) додайте інтерактивності за допомогою JavaScript так, щоб при введені вручну в поле вводу та натисканні на кнопки збільшення/зменшення загальна вартість позиції змінювалася (збільшувалася/зменшувалася).

// 1. В директорії "specific-book" створіть файл "main.js" та підключіть його до файлу "index.html"

// 2. Використовуючи JavaScript оживіть поле для вводу так, щоб при збільшенні значення кількості книжок загальна вартість також збільшувалася. Також при зменшенні кількості книжок - загальна вартість зменшувалася.

// 3. Передбачити випадки, щоб користувач не міг ввести значення 0 (нуль) чи від'ємне значення' та не більше 42 (42 - значення, яке ще дозволяється обрати користувачу (поле “amount” в books.json)).

// 4. Функціонал збільшення/зменшення повинен працювати, як через натискання кнопок (збільшити/зменшити) так і через введення з клавіатури.


document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('show-description');
    var description = document.querySelector('.desc');
  
    button.addEventListener('click', function() {
      if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        button.textContent = 'Hide Description';
      } else {
        description.style.display = 'none';
        button.textContent = 'Show Description';
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const countInput = document.getElementById('count');
    const priceElement = document.getElementById('price');
    const totalPriceElement = document.getElementById('total-price');

    const calculateTotal = () => {
        const count = parseFloat(countInput.value);
        const price = parseFloat(priceElement.textContent);
        const total = count * price;
        totalPriceElement.textContent = total.toFixed(2);
    };

    countInput.addEventListener('input', calculateTotal);
    calculateTotal(); // Початковий розрахунок
});

