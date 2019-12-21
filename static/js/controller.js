class Controller {
  constructor() {}
  objectLinker(model, stt, gateway) {
    this.model = model;
    this.sttManager = stt;
    this.apiGateway = gateway;
  }

  changeModel(arg) {}

  sendQuestion(question) {
    this.apiGateway.send(question);
  }

  startListen() {
    this.sttManager.startListen();
  }

  StandbyView_StartRecognition() {}
  StandbyView_Recognition() {}
  StandbyView_StartRecognition() {}
  StandbyView_StartRecognition() {}
  StandbyView_StartRecognition() {}

  OverlayView_StartRecognition() {}
  OverlayView_StartRecognition() {}
  OverlayView_StartRecognition() {}
  OverlayView_StartRecognition() {}
  OverlayView_StartRecognition() {}
}
