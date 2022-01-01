'use strict'

{
  const product = 'coat';
  const productCount = 3;
  const productCategory = 'clothes';
  const productCost = 1200;

  console.log(product);
  console.log(productCost * productCount);
}

{
    const item = 'MacBook';
    const count = 15;
    const category = 'Device';
    const price = 40000;
  
    console.log(item);
    console.log(`общая сумма товара: ${count * price}`);
}

{
    const item = prompt('Наименование товара');
    const count = +prompt('Количество товара');
    const category = prompt('Категория товара');
    const price = +prompt('Цена товара');

    console.log(`Наименование товара : ${item}`);
    console.log(`Количество товара : ${count}`);
    console.log(`общая сумма товара: ${count * price}`);
  
}