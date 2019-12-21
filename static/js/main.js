const siriWave = new SiriWave({
  container: document.getElementById("siri-wave"),
  width: 800,
  height: 120,
  style: "ios9",
  autostart: true,
  amplitude: 0
});
function randomAmplitude() {
  const value = 2;
  siriWave.setAmplitude(value);
  requestAnimationFrame(randomAmplitude);
}
randomAmplitude();

let model;
let view;
let controller;
let stanby;
let overlay;
let sttManager;
let ttsManager;
let apiGateway;

$(document).ready(function() {
  model = new Model();
  view = new View();
  controller = new Controller();
  stanby = new StandbyView();
  overlay;
  sttManager = new STTManger();
  ttsManager = new TTSModel();
  apiGateway = new APIGateway("서버이름");

  model.objectLinker(view, controller);
  controller.objectLinker(model, sttManager, ttsManager, apiGateway);
  view.objectLinker(controller, [stanby, overlay]);
  sttManager.objectLinker(model);
  ttsManager.objectLinker(model);

  stanby.objectLinker(view);
});
