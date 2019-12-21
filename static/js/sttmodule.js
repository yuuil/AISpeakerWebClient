class STTManger {
  constructor() {
    this.recognitionAdapter = new STTAdapter(this);
  }
  linkObjects(model) {
    this.model = model;
  }
  startListen() {
    this.recognitionAdapter.listen();
  }
  getText(result) {
    return result;
  }
}

class STTAdapter {
  constructor(manager) {
    this.sttManager = manager;
    if (webkitSpeechRecognition) {
      this.recognition = new ChromeRecognition(this);
      this.browser = "Chrome";
    } else if (SpeechRecognition) {
      this.recognition = new SpeechRecognition(this);
      this.browser = "Other Web";
    } else {
      this.recognition = undefined;
    }
  }
  recognitionOnLoad() {
    if (this.recognition === undefined) {
      return "No Speech Recognition";
    } else {
      return this.browser;
    }
  }
  listen() {
    this.recognition.start();
  }
  end(result) {
    this.manager.getText(result);
  }
}

class ChromeRecognition {
  constructor(adapter) {
    this.adapter = adapter;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = "ko-KR";
    this.recognition.interimResults = false;
  }
  setEvent() {
    this.recognition.onresult = event => {
      let speechResult = event.results[0][0].transcript.toLowerCase();
      this.adapter.end(speechResult);
    };
    this.recognition.onspeechend = () => {
      recognition.stop();
    };
  }
  start() {
    this.recognition.start();
  }
}

class SpeechRecognition {
  constructor(adapter) {
    this.adapter = adapter;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = "ko-KR";
    this.recognition.interimResults = false;
  }
  setEvent() {
    this.recognition.onresult = event => {
      let speechResult = event.results[0][0].transcript.toLowerCase();
      this.adapter.end(speechResult);
    };
    this.recognition.onspeechend = () => {
      recognition.stop();
      console.log("rec stop");
    };
  }
  start() {
    this.recognition.start();
  }
}
