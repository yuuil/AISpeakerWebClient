$(document).ready(function() {
  let model = new Model();
  let view = new View();
  let controller = new Controller();
  let stanby;
  let overlay;
  let sttManager = new STTManger();
  let ttsManager = new TTSModel();
  let apiGateway = new APIGateway("서버이름");

  model.objectLinker(view, controller, ttsManager);
  controller.objectLinker(model, sttManager, apiGateway);
  view.objectLinker(stanby, overlay);
  sttManager.objectLinker(model);
  ttsManager.objectLinker(model);
});
