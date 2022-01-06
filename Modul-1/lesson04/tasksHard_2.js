{
    const money = +prompt('Введите ваш месячный доход:');
    let diffAmount = 0;
    if(money <= 15000 ){
        console.log('Налог :' + (money * 13) / 100);
    }else if (money > 15000 && money < 50000){
        diffAmount = money - 15000;
        console.log('Налог :' + ((diffAmount * 20) / 100 + 15000));
    }else{
        diffAmount = money - 50000;
        console.log('Налог :' + ((diffAmount * 30) / 100 + 50000));
    }
}