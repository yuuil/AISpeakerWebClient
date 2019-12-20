class STTManger {
  constructor() {
    this.recognitionObj = new STTAdapter();
  }

  startListen() {}

  getText() {
    return "";
  }
}

class STTAdapter {
  constructor() {}
  listen(){};
  end();
}

class ChromeRecognition {
  constructor() {}
  start() {}
  onresult() {}
}

class SomeOfRecognition {
  constructor() {}
  start() {}
  onresult() {}
}
