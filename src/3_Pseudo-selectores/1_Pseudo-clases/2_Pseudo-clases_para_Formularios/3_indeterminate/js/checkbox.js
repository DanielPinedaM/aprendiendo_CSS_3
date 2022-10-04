/* variable inputs para enviar peticion get (leer) */
var inputs = document.getElementsByTagName("input");

/* recorrer los inputs con for */
for (var i = 0; i < inputs.length; i++) {
    /* hacer q los inputs en la posicion i inputs[i]
    tengan la propiedad indeterminate = true */
    inputs[i].indeterminate = true;
}
