var context = document.getElementById("context");
var selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
    .call(selected, function (element) {
        return "#" + element.getAttribute("id");
    })
    .join(", ");
