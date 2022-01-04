{
    const money = +prompt('Введите ваш месячный доход:');
    if(money < 15000 ){
        console.log('Налог :' + (money * 13) / 100);

    }else if (money >= 15000 && money <= 50000){
        console.log('Налог :' + (money * 20) / 100);

    }else{
        console.log('Налог :' + (money * 30) / 100);
    }
}