/* Seleccionar en JavaScript y guardar en una variable los siguientes elementos: */
let fullscreen = document.querySelector("img"); /* Imagen <img> */
let button = document.querySelector("button"); /* boton <button> */

button.addEventListener("click", () => {
    /* cuando el usuario haga click en el boton <button>... */
    if (!document.fullscreenElement) {
        fullscreen?.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
