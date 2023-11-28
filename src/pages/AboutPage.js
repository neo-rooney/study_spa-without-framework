import PageTitle from "../components/PageTitle.js";

class AboutPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const pageTitle = new PageTitle(this.$main, "About Page");
    pageTitle.render();
  }
}

export default AboutPage;
