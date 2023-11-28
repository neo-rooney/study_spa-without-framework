class Header {
  constructor($body) {
    this.$body = $body;
  }

  createHeaderEle(divClass, spanClass, text) {
    const div = document.createElement("div");
    div.setAttribute("class", divClass);

    const span = document.createElement("span");
    span.setAttribute("class", spanClass);
    span.appendChild(document.createTextNode(text));

    div.appendChild(span);

    return div;
  }

  render() {
    const header = document.createElement("header");

    const headerLeft = this.createHeaderEle(
      "header_item header_left",
      "header_text",
      "HOME"
    );

    headerLeft.addEventListener("click", () => {
      window.history.pushState("", "", "/");
      const urlChange = new CustomEvent("urlChange", {
        detail: { href: "/" },
      });
      document.dispatchEvent(urlChange);
    });

    const headerRight = this.createHeaderEle(
      "header_item header_rifht",
      "header_text",
      "ABOUT"
    );

    headerRight.addEventListener("click", () => {
      window.history.pushState("", "", "/about");
      const urlChange = new CustomEvent("urlChange", {
        detail: { href: "/about" },
      });
      document.dispatchEvent(urlChange);
    });

    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    this.$body.appendChild(header);
  }
}

export default Header;
