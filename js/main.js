import * as funcional from './funcional.js'
import * as naoFuncional from './naoFuncional.js'
import * as regrasDeNegocio from './regrasDeNegocio.js'
import * as body from './body.js'
export const Arrays = {
   B: [],
   I: [],
   N: [],
   G: [],
   O: [],
   all: []
};
export const ArraysInString = ['B', 'I', 'N', 'G', 'O','all'];
export const LettersInString = ['B', 'I', 'N', 'G', 'O'];
export const intervalMap = {
   B: { min: 1, max: 15 },
   I: { min: 16, max: 30 },
   N: { min: 31, max: 45 },
   G: { min: 46, max: 60 },
   O: { min: 61, max: 75 }
};
export let inputNumber = document.getElementById("value");
export function newNumber() {
   let value = inputNumber.value;
   inputNumber.value = "";
   if ( value == "" ) {}
   else if (funcional.validations(value)) {
      funcional.startMainProcess(value);
      naoFuncional.saveArrays(Arrays['all'], 'all'); 
   }
};
export function removeSlot(i) {
   const slot = document.getElementById(`value${i}`);
   const value = slot.textContent;
   funcional.removeSlotProcess(value, i);
}
export function searchValue(value) {
   for ( const letter in Arrays ) {
      const array = Arrays[letter];
      const index = array.indexOf(value);
      if ( index !== -1 ) {
         array.splice(index, 1);
         funcional.collumns(array, letter);
         naoFuncional.saveArrays(array, letter);
      }
   }
}
export function cleanYes() {
   funcional.cleanAllArrays();
   funcional.cleanAllCache();
   cleanNo();
   naoFuncional.cleanLastValue()
   body.addSlot();
   funcional.cleanAllCollumns();
   funcional.recentNumbers();
}
export function cleanNo() {
   document.getElementById("confirm").innerHTML = "";
}

window.cleanYes = cleanYes;
window.cleanNo = cleanNo;
window.newNumber = newNumber;
window.removeSlot = removeSlot;

