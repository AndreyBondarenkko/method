
//Tack 2
const getStringTransform = str => {
    str = str.toLowerCase().trim(); 
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}
console.log(getStringTransform('   привет Мир'));