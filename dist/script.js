/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


// Tablica styli z etykietami przycisku "name"
var styles = [{
  name: "Fajny Styl",
  file: "css/styles1.css"
}, {
  name: "Fajny Styl 2",
  file: "css/styles2.css"
}];
// Funkcja generująca linki
function generateStyleLinks() {
  var container = document.getElementById('styleLinksContainer');
  styles.forEach(function (style) {
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = style.name;
    link.addEventListener('click', function (e) {
      e.preventDefault();
      changeStylesheet(style.file);
    });
    container === null || container === void 0 ? void 0 : container.appendChild(link);
  });
}
// Funkcja zmieniająca arkusz stylów
function changeStylesheet(styleFile) {
  var _a;
  var links = document.getElementsByTagName('link');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if ((_a = link.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.includes('stylesheet')) {
      link.setAttribute('href', styleFile);
    }
  }
}
// Obsługa zdarzeń po załadowaniu strony
window.onload = function () {
  generateStyleLinks();
};
// function replaceStylesheet(): void {
//     const links = document.getElementsByTagName('link');
//     const button = document.getElementById('styleButton') as HTMLButtonElement;
//     debugger;
//     for (let i = 0; i < links.length; i++) {
//         const link = links[i];
//         console.log(styles[0].file);
//         if (link.getAttribute('href') === styles[0].file) {
//             link.setAttribute('href', styles[1].file);
//             button.innerText = styles[1].name;
//             break;
//         } else if (link.getAttribute('href') === styles[1].file) {
//             link.setAttribute('href', styles[0].file);
//             button.innerText = styles[0].name;
//             break;
//         }
//     }
// }
// Dodaj obsługę zdarzeń dla przycisku
// window.onload = () => {
//     const button = document.getElementById('styleButton');
//     button?.addEventListener('click', replaceStylesheet);
// };
/******/ })()
;