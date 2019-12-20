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
      "overlat-view": [
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

  updateView() {}
  getSTT() {}
  receiveResult() {}
}
