class OverlayView {
  constructor() {
    this.overlayView = $("#overlay-view");
    this.overlayModal = $("#overlay-modal");
    this.resultBox = $("#overlay-modal > #msgbox");
    this.speakerCircle = $("#overlay-modal > .speaker-circle");
    this.speakerIcon = $("#overlay-modal > #icon-section");

    this.haloEffect = $("#overlay-modal > .speaker-circle > .effect-halo");

    this.playAndPause = $(
      "#overlay-modal > .speaker-circle > .icon-section > .control-icon"
    ).first();
    this.reset = $(
      "#overlay-modal > .speaker-circle > .icon-section > .control-icon"
    ).next();

    this.showOverlayView = false;
  }

  objectLinker(view) {
    this.view = view;
    this.controller = view.controller;
    this.addEventHandler();
  }
  addEventHandler() {
    this.overlayView.click();
  }

  ClickedResultMailbox() {
    console.log("clicked");
    this.showOverlayView = true;
    this.overlayView.addClass("slide-up").removeClass("slide-down");
    this.overlayView.css({ opacity: "1", "pointer-events": "auto" });
  }

  ClickedOverlayView(evt) {
    if (evt.target.id === "overlay-view") {
      this.showOverlayView = false;
      this.overlayView.addClass("slide-down").removeClass("slide-up");
      this.overlayView.css({ opacity: "0", "pointer-events": "none" });
    }
  }
}
