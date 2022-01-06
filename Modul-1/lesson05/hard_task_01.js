

//Tack -hurd 1
function getNod(x, y) {
    if ((typeof x !=='number') || (typeof y !=='number')) {
        return false;
    }

    for(k = 0; k < y;){
        var t = y;
        y = x % y; 
        x = t;
    }
    return x;
}
    console.log(getNod(10, 25));
    console.log(getNod(9, 3));