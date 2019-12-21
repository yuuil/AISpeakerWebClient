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
    let isPressed = model.getModelData("standby-view", 0);
    model.changeViewModel([
      { view: "standby-view", argc: 0, argv: !isPressed }
    ]);
  }
  StandbyView_PlayAndPhuse() {
    let isPressed = model.getModelData("standby-view", 1);
    model.changeViewModel([
      { view: "standby-view", argc: 1, argv: !isPressed }
    ]);
  }
  StandbyView_ResetSpeach() {
    model.changeViewModel([
      { view: "standby-view", argc: 0, argv: false },
      { view: "standby-view", argc: 2, argv: true }
    ]);
  }
  StandbyView_ShowOverlay() {
    model.changeViewModel([{ view: "standby-view", argc: 3 }]);
  }

  OverlayView_StartRecognition() {
    model.changeViewModel([{ view: "overlay-view", argc: 0, argv: true }]);
  }
  OverlayView_PlayAndPhuse() {
    model.changeViewModel([{ view: "overlay-view", argc: 1, argv: true }]);
  }
  OverlayView_CancleSpeach() {
    model.changeViewModel([
      { view: "overlay-view", argc: 0, argv: false },
      { view: "overlay-view", argc: 2, argv: true }
    ]);
  }
  OverlayView_CloseOverlay() {
    model.changeViewModel([{ view: "overlay-view", argc: 3 }]);
  }
}
