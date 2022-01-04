
// Task 2
{
    const rain = Math.round(Math.random());
    rain === 1 ? console.log('Пошёл дождь. Возьмите зонт!') : console.log('Дождя нет!');
    console.log(rain);
}

// Task 3
{
    const math = +prompt('Введите кол-во баллов по математике:');
    const english = +prompt('Введите кол-во баллов по английский язык:');
    const informatics = +prompt('Введите кол-во баллов по информатике:');

    const results = math + english +informatics;
    results >= 265 ? console.log('Поздравляю, вы поступили на бюджет!') : console.log('its fail');
}

// Task 4

{
    const money = prompt('Cколько денег вы хочете снять?').trim();

    if(money.length === 0 || +money === 0){
        console.log('Введите сумму');
    }else if(+money % 100 === 0){
        console.log('Вы можите снять деньги.');
    }else{
        console.error('Банкомат может выдать только купюры минимальным номиналом 100р.')
    }
}