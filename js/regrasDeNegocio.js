import * as main from './main.js'
import * as funcional from './funcional.js'
import * as naoFuncional from './naoFuncional.js'
import * as body from './body.js'

export function validIsInteger(value) {
    let valueToFloat = Number(value);
    let integer = Number.isInteger(valueToFloat);
    if (!integer) {
        alert("Precisa ser um numero inteiro!")
        return false;
    }
    return true;
}
export function validIntervalRage(value) {
    if( value <= 0 || value >75){
        alert("Invalid value");
        return false;
    }
    return true;
}
export function validRepetedNumber(value) {
    if(main.Arrays['all'].includes(value)) {
        alert("Value has already been inserted");
        return false;
    }
    return true;
}
export function discoverCorrectLetter(value) {
    let discovery;
    for (const letter in main.intervalMap) {
        const { min, max } = main.intervalMap[letter];
        if (value >= min && value <= max) {
            discovery = letter;
        }
    }
    return discovery;
}