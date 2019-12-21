class StandbyView {
  constructor() {
    this.speakerCiecle = $("#speaker-circle");
    this.coreVoice = $("#standby-core-voice");
    this.voiceImage = $("#standby-core-img");
    this.mailbox = $("#result-mailbox");
    this.playAndPause = $(".control-icon").first();
    this.reset = $(".control-icon").next();

    this.siri = $("#siri-wave");
    $("#siri-wave > canvas").css({ width: "100%" });
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
          this.domUpdater(element.name, element.arg);
          element.modified = false;
        }
      }
    }
  }

  domUpdater(name, arg) {
    switch (name) {
      case "voice-core":
        this.startRecognition(arg);
        break;
      case "play-and-pause":
        this.switchPlayAndPause(arg);
        break;
      case "reset":
        this.pressResetButton();
        break;
      case "open-mailbox":
        this.pressMailbox();
        break;
      default:
    }
  }

  startRecognition(show) {
    if (show) {
      console.log("Speaker On");
      this.voiceImage.addClass("fade-out").removeClass("fade-in");
      this.speakerCiecle.addClass("on");
      this.siri.css({ display: "block" });
      siriWave.start();
      siriWave.setSpeed(0.1);
    } else {
      console.log("Speaker Off");
      this.voiceImage.addClass("fade-in").removeClass("fade-out");
      this.speakerCiecle.removeClass("on");
      this.siri.css({ display: "none" });
      siriWave.stop();
    }
  }

  switchPlayAndPause(pause) {
    if (pause) {
      this.playAndPause
        .attr("src", "static/img/round_play_circle_outline_white_48dp.png")
        .addClass("press-button");
      setTimeout(() => {
        this.playAndPause.removeClass("press-button");
      }, 210);
    } else {
      this.playAndPause
        .attr("src", "static/img/round_pause_circle_outline_white_48dp.png")
        .addClass("press-button");
      setTimeout(() => {
        this.playAndPause.removeClass("press-button");
      }, 210);
    }
  }

  pressResetButton() {
    this.reset.addClass("press-button rotate-button");
    setTimeout(() => {
      this.reset.removeClass("press-button rotate-button");
    }, 210);
  }

  pressMailbox() {
    this.mailbox.addClass("press-button");
    setTimeout(() => {
      this.mailbox.removeClass("press-button");
    }, 210);
  }
}
