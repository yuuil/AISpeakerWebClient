class StandbyView {
  constructor() {
    this.coreVoice = $(".core-voice");
    this.mailbox = $("#result-mailbox");
    this.playAndPause = $(".control-icon").first();
    this.reset = $(".control-icon").next();
  }
  objectLinker(view) {
    this.view = view;
    this.controller = view.controller;
    this.addEventHandler();
  }
  addEventHandler() {
    this.coreVoice.click(this.controller.StandbyView_StartRecognition);
    this.mailbox.click(this.controller.StandbyView_ShowOverlay);
    this.playAndPause.click(this.controller.StandbyView_PlayAndPhuse);
    this.reset.click(this.controller.StandbyView_ResetSpeach);
  }
  update(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (element.modified) {
          console.log(element);
          element.modified = false;
        }
      }
    }
  }
}
