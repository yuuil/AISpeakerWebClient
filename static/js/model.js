class Model {
  constructor() {
    this.viewModel = {
      "standby-view": [
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
      ],
      "overlay-view": [
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
    };
    this.view = "";
  }
  linkObjects(model) {
    this.model = model;
  }
  updateView() {}
  getSTT() {}
  receiveResult() {}
}
