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

  StandbyView_StartRecognition() {
    this.model.changeViewModel([{ view: "standby-view", argc: 0, argv: true }]);
  }
  StandbyView_PlayAndPhuse() {
    this.model.changeViewModel([{ view: "standby-view", argc: 1, argv: true }]);
  }
  StandbyView_ResetSpeach() {
    this.model.changeViewModel([
      { view: "standby-view", argc: 0, argv: false },
      { view: "standby-view", argc: 2, argv: true }
    ]);
  }
  StandbyView_ShowOverlay() {
    this.model.changeViewModel([{ view: "standby-view", argc: 3 }]);
  }

  OverlayView_StartRecognition() {
    this.model.changeViewModel([{ view: "overlay-view", argc: 0, argv: true }]);
  }
  OverlayView_PlayAndPhuse() {
    this.model.changeViewModel([{ view: "overlay-view", argc: 1, argv: true }]);
  }
  OverlayView_CancleSpeach() {
    this.model.changeViewModel([
      { view: "overlay-view", argc: 0, argv: false },
      { view: "overlay-view", argc: 2, argv: true }
    ]);
  }
  OverlayView_CloseOverlay() {
    this.model.changeViewModel([{ view: "overlay-view", argc: 3 }]);
  }
}
