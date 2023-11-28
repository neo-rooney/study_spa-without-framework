class PageTitle {
  constructor($main, $title) {
    this.$main = $main;
    this.$title = $title;
  }
  render() {
    const pageTitle = document.querySelector(".page_title");
    if (pageTitle) {
      pageTitle.remove();
    }

    const div = document.createElement("div");
    div.setAttribute("class", "page_title");

    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(this.$title));

    div.appendChild(h1);

    this.$main.appendChild(div);
  }
}

export default PageTitle;
