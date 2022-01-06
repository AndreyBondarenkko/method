

//Tack 04
const calculate =  (money, productItem, sale) => {
    let money = money;
    
    if(productItem > 10){
        return money = money * 3 / 100;
    }
    
    if (money > 30000){
        let diffAmount = money - 30000;
        return (diffAmount * 20) / 100 + 30000;
    }
    
    if(sale = "METHED"){
        return money * 10 / 100;
    }
    
    if(sale = "G3H2Z1"){
        return money * 10 / 100;
    }
}

console.log(calculate(1,2,3));