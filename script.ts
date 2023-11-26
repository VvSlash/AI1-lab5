// Tablica styli z etykietami przycisku "name"
const styles = [
    { name: "Fajny Styl", file: "css/styles1.css" },
    { name: "Fajny Styl 2", file: "css/styles2.css" }
];
// Funkcja generująca linki
function generateStyleLinks(): void {
    const container = document.getElementById('styleLinksContainer');

    styles.forEach((style) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = style.name;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            changeStylesheet(style.file);
        });
        container?.appendChild(link);
    });
}
// Funkcja zmieniająca arkusz stylów
function changeStylesheet(styleFile: string): void {
    const links = document.getElementsByTagName('link');

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.getAttribute('id')?.includes('stylesheet')) {
            link.setAttribute('href', styleFile);
        }
    }
}
// Obsługa zdarzeń po załadowaniu strony
window.onload = () => {
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
