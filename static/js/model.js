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
            arg: "NO DATA"
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
            arg: "NO DATA"
          }
        ]
      }
    };

    this.question = "";
    this.result = "";
  }

  objectLinker(view, controller, tts) {
    this.view = view;
    this.controller = controller;
    this.tts = tts;
  }

  updateView() {
    this.view.update(this.viewModel);
  }

  getSTT(text) {
    this.question = text;
    this.controller.sendQuestion(text);
  }
  receiveResult(result) {
    this.anser = result;
    let temp = this.viewModel["overlay-view"].data[3];
    temp.modified = true;
    temp.arg = result;
  }
}
