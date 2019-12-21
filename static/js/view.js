class View {
  constructor() {
    this.view = {};
  }

  objectLinker(standby, overlay) {
    this.view["standby-view"] = standby;
    this.view["overlat-view"] = overlay;
  }

  update(viewModel) {
    if (viewModel === undefined) return;

    if (viewModel["standby-view"].modified) {
      this.view["standby-view"].update(viewModel["standby-view"].data);
    }
    if (viewModel["overlay-view"].modified) {
      this.view["overlay-view"].update(viewModel["overlay-view"].data);
    }
  }
}
