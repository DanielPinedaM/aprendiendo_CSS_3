customElements.define( /* definir un elemento HTML personalozado customElements.define */
    "simple-custom", /* el elemento personalizado se llama simple-custom */
    class extends HTMLElement {
        constructor() {
            super();

            let divElem = document.createElement("div");
            divElem.textContent = this.getAttribute("text");

            let shadowRoot = this.attachShadow({ mode: "open" }).appendChild(divElem);
        }
    }
);
