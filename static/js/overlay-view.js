$(function() {
  const overlayView = $("#overlay-view");
  const overlayModal = $("#overlay-modal");
  const resultMailbox = $("#result-mailbox");
  const msgBox = $("#msgbox");
  const speakerCircle = $("#overlay-modal > #speaker-circle")
  const speakerIcon = $("#overlay-modal > #icon-section");
  let overlayOn = false;
  resultMailbox.click(ClickedResultMailbox);
  overlayView.click(ClickedOverlayView);

  function ClickedResultMailbox() {
    console.log("clicked");
    overlayOn = true;
    overlayView.addClass("slide-up").removeClass("slide-down");
    overlayView.css({"opacity":"1", "pointer-events": "auto"});
  }

  function ClickedOverlayView(evt) {
    if(evt.target.id === "overlay-view") {
      overlayOn = false;
      overlayView.addClass("slide-down").removeClass("slide-up");
      overlayView.css({"opacity":"0", "pointer-events": "none"});
    }
  }
});