import * as funcional from './funcional.js'
import * as naoFuncional from './naoFuncional.js'
import * as regrasDeNegocio from './regrasDeNegocio.js'
import * as main from './main.js'

let last = "";
for(let i = 0; i < 7; i++) {
   last += `<div id='recentNumber${i}' class='recents centralized'></div>`;
};
document.getElementById("recents").innerHTML = last;
for(let i = 0; i < 5; i++) {
   const ArraysInString = ["B","I","N","G","O"];
   let BINGOletter = "";
   let slotsToLetters = "";
   BINGOletter = ArraysInString[i];
   generateBoard(BINGOletter, slotsToLetters);
   let bigLetters = document.getElementById(`${BINGOletter}-1`);
   bigLetters.innerHTML = BINGOletter;
   bigLetters.classList.add("bigLetters");
}
export function generateBoard(BINGOletter, slotsToLetters) {
   for(let i = -1; i < 16; i++) {
      const side = definitionOfSide(i, BINGOletter);
      slotsToLetters += `
      <div
         id='${BINGOletter}${i}'
         class='valorr centralized ${side}'
      >
      </div>`;
   };
   document.getElementById(`${BINGOletter}`).innerHTML = slotsToLetters;
}
export function addSlot() {
   let i=0;
   let j=0;
   let slots = "";
   let display = document.getElementById("display");
   for(i=main.Arrays['all'].length-1,j=1;i>=0;i--,j++) {
      slots += `
         <div class="slotWindow">
            <div class="slotHeader centralized">
               <span id="Position${i}">
                  ${j}
               </span>
               <button class="centralized" onclick="removeSlot(${i})"
               >X</button>
            </div>
            <p name="" id="value${i}"></p>
         </div>`;
   }
   display.innerHTML = slots;
   for(i=0;i<main.Arrays['all'].length;i++) {
      if(main.Arrays['all'][i]>0) {
         document.getElementById(`value${i}`).textContent = main.Arrays['all'][i];
      }
   }
}

export function definitionOfSide(i, BINGOletter) {
   let side = "";
   if (i % 2 === 0) {
      side = `left${BINGOletter}`;
   } else {
      side = `right${BINGOletter}`;
   }
   return side;
}