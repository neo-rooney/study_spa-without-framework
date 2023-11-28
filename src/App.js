import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
class App {
  constructor($body) {
    this.$body = $body;

    this.render();
  }
  render() {
    const header = new Header(this.$body);
    header.render();

    const main = document.createElement("main");
    main.setAttribute("class", "page_main");
    this.$body.appendChild(main);

    const homePage = new HomePage(main);
    const aboutPage = new AboutPage(main);

    homePage.render();

    document.addEventListener("urlChange", (e) => {
      const { href } = e.detail;

      switch (href) {
        case "/":
          homePage.render();
          break;
        case "/about":
          aboutPage.render();
          break;
      }
    });
  }
}

export default App;
