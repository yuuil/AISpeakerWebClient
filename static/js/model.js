class Model {
  constructor() {
    this.viewModel = {
      "standby-view": {
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
        if (element.argv) {
          this.viewModel[element.view].date[element.argc] = element.argv;
        }
      }
    }
    this.updateView();
  }

  updateView() {
    this.view.update(this.viewModel);
  }

  getSTT(text) {
    this.question = text;
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
