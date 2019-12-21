class APIGateway {
  constructor(serverName) {
    this.serverUrl = "";
    this.serverPort = 0;
  }
  objectLinker(model) {
    this.model = model;
  }
  send(question) {
    this.model.receiveResult(question);
  }
  receive() {}
}
