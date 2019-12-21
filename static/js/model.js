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
            arg: false
          },
          {
            name: "reset",
            modified: false,
            arg: false
          },
          {
            name: "open-mailbox",
            modified: false,
            arg: ""
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
  }

  objectLinker(view, controller, tts) {
    this.view = view;
    this.controller = controller;
    this.tts = tts;
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

  updateView() {
    this.view.update(this.viewModel);
  }

  getSTT(text) {
    this.question = text;
    let temp = this.viewModel["standby-view"];
    temp.modified = true;

    temp = temp.data[0];
    temp.modified = true;
    temp.arg = false;

    this.updateView();
    this.controller.sendQuestion(text);
  }
  receiveResult(result) {
    this.answer = result;
    let temp = this.viewModel["overlay-view"];
    temp.modified = true;

    temp = temp.data[3];
    temp.modified = true;
    temp.arg = result;

    updateView();
  }
}
