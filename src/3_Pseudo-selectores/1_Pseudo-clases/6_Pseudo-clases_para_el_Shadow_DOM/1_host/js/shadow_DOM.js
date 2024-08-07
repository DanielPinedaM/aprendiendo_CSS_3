let style = document.createElement("style");
let span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
    "span:hover { text-decoration: underline; }" +
    ":host-context(h1) { font-style: italic; }" +
    ':host-context(h1):after { content: " - no links in headers!" }' +
    ":host-context(article, aside) { color: gray; }" +
    ":host(.footer) { color : red; }" +
    ":host { background: red; padding: 2px 5px; }";
