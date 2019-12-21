$(function() {
  const overlayView = $("#overlay-view");
  const resultMailbox = $("#result-mailbox");
  var overlayOn = false;
  resultMailbox.click(ClickedResultMailbox);

  function ClickedResultMailbox() {
    console.log("clicked");
    if (overlayOn) {
      overlayOn = false;
      overlayView.addClass("slide-down").removeClass("slide-up");
      overlayView.css({"opacity":"0", "pointer-events": "none"});
    } else {
      overlayOn = true;
      overlayView.addClass("slide-up").removeClass("slide-down");
      overlayView.css({"opacity":"1", "pointer-events": "auto"});
    }
  }
});

class StandbyView {
  constructor() {
    this.coreVoice = $(".core-voice");
    this.mailbox = $("#result-mailbox");
    this.playAndPause = $("control-icon").first();
    this.reset = $("control-icon").next();
  }
  objectLinker(view) {
    this.view = view;
    this.controller = view.controller;
  }
  addEventHandler() {
    this.coreVoice.click(this.controller.StandbyView_StartRecognition);
    this.mailbox.click(this.controller.StandbyView_ShowOverlay);
    this.playAndPause.click(this.controller.StandbyView_PlayAndPhuse);
    this.reset.click(this.controller.StandbyView_ResetSpeach);
  }
  update(data) {}
}
