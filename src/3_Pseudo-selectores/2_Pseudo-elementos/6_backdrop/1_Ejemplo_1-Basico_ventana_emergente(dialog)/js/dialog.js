/* Seleccionar la ventana emergente <dialog> en JavaScript */
var dialog = document.querySelector("dialog");

/* ABRIR ventana emergente */
function openDialog() {
    dialog.showModal();
}

/* CERRAR ventana emergente */
function closeDialog() {
    dialog.close();
}
