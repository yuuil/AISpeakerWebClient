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

  model.objectLinker(view, controller, ttsManager);
  controller.objectLinker(model, sttManager, apiGateway);
  view.objectLinker(controller, [stanby, overlay]);
  sttManager.objectLinker(model);
  ttsManager.objectLinker(model);

  stanby.objectLinker(view);
});

console.log("READY");
