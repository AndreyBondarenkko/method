{
    const item = prompt('Наименование товара');
    const count = prompt('Количество товара');
    const category = prompt('Категория товара');
    const price = prompt('Цена товара');

    if(isNaN(count) || isNaN(price)){
        console.log('Вы ввели некорректные данные');
    }else{
        console.log(`Наименование товара : ${item}`);
        console.log(`Количество товара : ${count}`);
        console.log(`общая сумма товара: ${count * price}`);
    }
  
}