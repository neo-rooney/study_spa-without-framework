class App {
  constructor($body) {
    this.$body = $body;

    this.render();
  }
  render() {
    console.log(this.$body);
  }
}

export default App;
