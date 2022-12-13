function add(a, b){
    return a+b;
};

function abs(a){
    if (a < 0){
        a * -1;
    }
    return a;
}

function div(a, b){
    if (b == 0){
        throw new Error('Divisor cannot be 0');
    }

    //default
    return a/b;
}

export {
    add,
    abs,
    div
};