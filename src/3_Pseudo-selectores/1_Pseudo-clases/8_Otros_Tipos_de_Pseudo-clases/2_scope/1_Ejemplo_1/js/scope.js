let paragraph = document.getElementById("para");
let output = document.getElementById("output");

if (paragraph.matches(":scope")) {
    output.innerText = "Sí, ¡el elemento tiene su propio alcance como se esperaba!";
}
