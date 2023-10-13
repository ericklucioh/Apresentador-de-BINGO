import * as main from './main.js'
import * as funcional from './funcional.js'
import * as regrasDeNegocio from './regrasDeNegocio.js'
import * as body from './body.js'


document.addEventListener( "keypress", function(e) {
   if ( e.key === "Enter" ) {
      main.newNumber();
   }
});

export function confirmToClean() {
   document.getElementById("confirm").innerHTML = `
      <div id="clearWindow" class="centralized">
         Tem certeza?
         <button id="no" onclick="cleanNo()">
            Não
         </button>
         <button id="yes" onclick="cleanYes()">
            Sim
         </button>
      </div>`;
}
window.confirmToClean = confirmToClean;

export function loadArrays() {
   for (const arrayName of main.ArraysInString) {
      const array = JSON.parse(localStorage.getItem(arrayName)) || [];
      main.Arrays[arrayName] = array;
   }
}

export function cleanRecentNumbers() {
   for (let i = 0; i < 7; i++) {
      document.getElementById(`recentNumber${i}`).innerHTML = "" ;
   }
}

export function printRecentNumbers() {
   for ( let i = 0; i < 7; i++ ) {
      if (main.Arrays['all'][i] > 0) {
         document.getElementById(`recentNumber${i}`).innerHTML = main.Arrays['all'][i];
      };
   };
}

export function cleanCache(letter) {
   localStorage.removeItem(letter);
   window[letter] = [];
}

export function addLastValue(value) {
   const allNumbers = document.getElementById("allNumbers");
   const elements = allNumbers.querySelectorAll("div");

   elements.forEach(function(element) {
      const content = element.textContent.trim();
      if ( content === value.toString() ) {
         element.classList.add("new-value");
      }
   });
}

export function cleanLastValue() {
   var elementsWithNewClass = document.querySelectorAll(".new-value");
   elementsWithNewClass.forEach(function (element) {
      element.classList.remove("new-value");
   });
}

export function newlastValue() {
   let num = document.getElementById('recentNumber0');
   let value = num.textContent;
   if( value > 0 ) {
      addLastValue(value);
   }
}

export function cleanCollumn(arrayName) {
   for( let i = 0; i < 15; i++ ) {
      document.getElementById(`${arrayName}${i}`).innerHTML = "";
   };
}

export function printCollum(array, letterName) {
   for( let i = 0; i < array.length; i++ ) {
      document.getElementById(`${letterName}${i}`).innerHTML = array[i];
   };
}

export function saveArrays(array,arrayName) {
   localStorage.setItem(arrayName, JSON.stringify(array));
} 