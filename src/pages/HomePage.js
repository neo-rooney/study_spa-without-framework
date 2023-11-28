import PageTitle from "../components/PageTitle.js";
class HomePage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const pageTitle = new PageTitle(this.$main, "Home Page");
    pageTitle.render();
  }
}

export default HomePage;
