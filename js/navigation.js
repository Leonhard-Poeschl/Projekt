//Variablen und verbindungen zu HTML Knöpfen
const knopfLinks = document.getElementById("knopfLinks");
const knopfMitte = document.getElementById("knopfMitte");
const knopfRechts = document.getElementById("knopfRechts");
const ZurückStart = document.getElementById("Returne");

//Textausgabe
const anzeige = document.getElementById("anzeige");

//Variablen zur Navigation im JSON
var id = "start";
var idlinks = "start";
var idmitte = "start";
var idrechts = "start";

//Start
function erststart() {
    knopfLinks.textContent = "Start";
    knopfMitte.textContent = "Start";
    knopfRechts.textContent = "Start";
}
erststart();

//Navigations Logik von Level zu Level
function JSONtoText(){
    fetch("json/text.json") //Greift sich die JSON Datei
    .then(res => res.json())  // JSON parsen
    .then(data => { // Variablen aus JSON
        //Abrufen des gesamt Eintrages
        const text = data[id];
        //Variable für den ausgegebenen text
        const { worte } = text
        //Namen der Nächsten Knöpfe
        const { KnopfL } = text
        const { KnopfM } = text
        const { KnopfR } = text
        //Die Nächsten ID´s für die Knöpfe abrufen zum weiter Navigieren
        const { NächsterL } = text
        const { NächsterM } = text
        const { NächsterR } = text

        // Daten in <p>/anzeige schreiben
        anzeige.innerHTML = worte;
        //Umbenennen der knöpfe
        knopfLinks.textContent = `${KnopfL}`;
        knopfMitte.textContent = `${KnopfM}`;
        knopfRechts.textContent = `${KnopfR}`;
        //Zuweisung der ID´s fürs weiter Navigieren
        idlinks = `${NächsterL}`;
        idmitte = `${NächsterM}`;
        idrechts = `${NächsterR}`;

    })
    .catch(error => console.error("Fehler beim Laden des JSON:", error));

}
//Linker Knopf
knopfLinks.addEventListener("click", () => {
    id = idlinks;
    JSONtoText();
});
//Mittlerer Knopf
knopfMitte.addEventListener("click", () => {
    id = idmitte;
    JSONtoText();
});
//Rechter Knopf
knopfRechts.addEventListener("click", () => {
    id = idrechts;
    JSONtoText();
});
//Zurück zum Start Knopf
ZurückStart.addEventListener("click", () => {
    id = "start";
    JSONtoText();
});
