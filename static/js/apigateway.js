class APIGateway {
  constructor(serverName) {
    this.serverUrl = "";
    this.serverPort = 0;
  }
  linkObjects(model) {
    this.model = model;
  }
  send(question) {}
  receive() {}
}
