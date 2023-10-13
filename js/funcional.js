import * as main from './main.js'
import * as naoFuncional from './naoFuncional.js'
import * as regrasDeNegocio from './regrasDeNegocio.js'
import * as body from './body.js'

export function validations(value) {
   if( regrasDeNegocio.validIsInteger(value) 
   && regrasDeNegocio.validIntervalRage(value) 
   && regrasDeNegocio.validRepetedNumber(value)) { 
      return true
   }
   return false
}
export function loadWindow() {
   naoFuncional.loadArrays(); 
   printAllCollumns();
   recentNumbers();
   naoFuncional.newlastValue();
   body.addSlot();
   var campoTexto = document.getElementById('value');
   campoTexto.focus()
}


window.addEventListener('load', loadWindow);
export function recentNumbers() {
   naoFuncional.cleanRecentNumbers();
   naoFuncional.printRecentNumbers();
}
export function cleanAllCollumns() {
   for ( let letter of main.LettersInString ) {
      naoFuncional.cleanCollumn(letter);
   }
}
export function cleanAllCache() {
   for( let letter of main.ArraysInString ) {
      naoFuncional.cleanCache(letter);
   }
}
export function cleanAllArrays() {
   for ( const letter of main.ArraysInString ) {
      main.Arrays[letter] = [];
   }
}
export function lastValue() {
   naoFuncional.cleanLastValue();
   naoFuncional.newlastValue();
}
export function collumns(array, letterName) {
   naoFuncional.cleanCollumn(letterName);
   naoFuncional.printCollum(array, letterName);
}
export function printAllCollumns() {
   for( let letter of (main.LettersInString)) {
      naoFuncional.printCollum(main.Arrays[letter], letter);
   }
}
export function printAllSlots() {
   for(let i of main.Arrays['all']) {
      body.addSlot(i);
   }
}
export function startMainProcess(value) {
   main.Arrays['all'].unshift(value);
   naoFuncional.saveArrays(main.Arrays['all'],'all');
   recentNumbers();
   body.addSlot();
   sortNumber(value); 
   viewerPage.Reload();
}
export function removeSlotProcess(value, i) {
   main.Arrays['all'].splice(i, 1);
   naoFuncional.cleanCache('all');
   naoFuncional.saveArrays(main.Arrays['all'],'all');
   main.searchValue(value);
   recentNumbers();
   naoFuncional.cleanLastValue();
   naoFuncional.newlastValue();
   body.addSlot();
   sortNumber();
}
export function sortNumber(value) {
   let letter = regrasDeNegocio.discoverCorrectLetter(value);
   if (letter) {
      const array = main.Arrays[letter];
      array.push(value);
      collumns(array, letter);
      naoFuncional.saveArrays(array, letter);
      lastValue(value);
   }
}