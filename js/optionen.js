//Constanten zum Verbinden mit dem HTML Elementen
const select = document.getElementById("textfarbe");
const texts = document.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, button, select"); //Änderungen an allen texten
const textsi = document.querySelectorAll("p, div, select"); //Für die Text Größe weil wenn ich alles verwende es mir das disigne zu sehr zerschiest
const txtsize = document.getElementById("input"); // Input für die Schriftgröße
const sitesize = document.getElementById("sitesize"); //Input für die Seiten Größe
const sisz = document.querySelectorAll("body"); //Verbindung für den gesamten "body"

//Ändern der Textfarbe
select.addEventListener("change", () => {
    texts.forEach(element => {
        element.style.color = select.value;
    });
});

//Textgröße
txtsize.addEventListener("change", () => {
    textsi.forEach(element => {
        element.style.fontSize = txtsize.value + "px";
    });
});

//Seitengröße
sitesize.addEventListener("change", () => {
    sisz.forEach(element => {
        element.style.fontSize = sitesize.value + "%";
    });
});
