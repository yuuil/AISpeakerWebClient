class TTSModel {
  constructor() {}
  objectLinker(model) {
    this.model = model;
  }
  startTTS(text) {
    var voices = synth.getVoices()[0];
    text = text.split("\n");
    text.forEach(v => {
      if (v.length) {
        let utter = new SpeechSynthesisUtterance(v);
        utter.voice = voices;
        utter.pitch = 0.8;
        utter.rate = 0.8;
        synth.speak(utter);
      }
    });
  }
}
