class Model {
  constructor() {
    this.viewModel = {
      "standby-view": {
        modified: false,
        data: [
          {
            name: "voice-core",
            modified: false,
            arg: false
          },
          {
            name: "play-and-pause",
            modified: false,
            arg: true
          },
          {
            name: "reset",
            modified: false,
            arg: false
          },
          {
            name: "open-mailbox",
            modified: false,
            arg: "질문을 말씀해주세요"
          }
        ]
      },
      "overlay-view": {
        modified: false,
        data: [
          {
            modified: false,
            arg: false
          },
          {
            modified: false,
            arg: false
          },
          {
            modified: false,
            arg: false
          },
          {
            modified: false,
            arg: ""
          }
        ]
      }
    };

    this.question = "";
    this.answer = "";
    this.message =
      "AI 스피커 아이쿠 입니다!\n머핀을 누르고 말씀해주세요\n주식, 날씨, 뉴스, 성경에 대해 질문하시면 됩니다!";
  }

  objectLinker(view, controller) {
    this.view = view;
    this.controller = controller;
  }

  changeViewModel(chages) {
    for (const key in chages) {
      if (chages.hasOwnProperty(key)) {
        const element = chages[key];
        this.viewModel[element.view].modified = true;
        this.viewModel[element.view].data[element.argc].modified = true;
        if (element.argv !== undefined) {
          this.viewModel[element.view].data[element.argc].arg = element.argv;
        }
      }
    }
    this.updateView();
  }

  getModelData(view, argc) {
    return this.viewModel[view].data[argc].arg;
  }

  getPreviousMessage() {
    return this.message;
  }

  updateView() {
    this.view.update(this.viewModel);
  }

  getServerError() {}

  getText(text) {
    this.question = text;
    this.controller.sendQuestion(text);
    console.log("get text from stt : " + text);
  }

  updateSpeechAnimation() {
    let temp = this.viewModel["standby-view"];
    temp.modified = true;
    temp = temp.data[0];
    temp.modified = true;
    temp.arg = false;
    this.updateView();
  }
  receiveResult(result) {
    // this.answer = result;
    // let temp = this.viewModel["overlay-view"];
    // temp.modified = true;

    // temp = temp.data[3];
    // temp.modified = true;
    // temp.arg = result;

    let mailbox = this.viewModel["standby-view"];
    mailbox.modified = true;

    mailbox = mailbox.data[3];
    mailbox.modified = true;
    mailbox.arg = this.question;

    console.log("receive data form server : " + result);

    this.updateView();
  }
}
