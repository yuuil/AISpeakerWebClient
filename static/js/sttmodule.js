class STTManger {
  constructor() {
    this.recognitionAdapter = new STTAdapter(this);
  }
  objectLinker(model) {
    this.model = model;

    let rec = this.recognitionAdapter.recognitionOnLoad();
    if (rec === undefined) {
      alert("크롬 브라우저에서만 실행 가능합니다");
    }
  }
  startListen() {
    this.recognitionAdapter.listen();
  }
  getText(result) {
    console.log("get Text : " + result);
    this.model.getText(result);
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
      this.browser = "Other Web Browser";
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
    console.log("mic end " + result);
    this.sttManager.getText(result);
  }
}

class ChromeRecognition {
  constructor(adapter) {
    this.adapter = adapter;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = "ko-KR";
    this.recognition.interimResults = false;

    this.setEvent();
  }
  setEvent() {
    this.recognition.onresult = event => {
      let speechResult = event.results[0][0].transcript.toLowerCase();
      this.adapter.end(speechResult);
    };
    this.recognition.onspeechend = () => {
      this.recognition.stop();
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
