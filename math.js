//A representation of the api.js file I created where functions are called and normal values are returned.
//Link: https://github.com/WSU-4110/WellOff/blob/48feafd6e916f6e23c572772d52e8b27316a5674/api/api.js
//Created by: Matthew Meyer
//Contributors: Matthew Meyer

/**
 * Returns a + b
 * @param {int} a 
 * @param {int} b 
 * @returns {int} 
 * @author Matthew Meyer
 */
function add(a, b){
    return a+b;
};

/**
 * Returns the positive value of the a
 * @param {int} a 
 * @returns {int}
 * @author Matthew Meyer
 */
function abs(a){
    if (a < 0){
        a * -1;
    }
    return a;
}

/**
 * Returns a / b
 * @param {int} a 
 * @param {int} b 
 * @returns {int}
 * @author Matthew Meyer
 */
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