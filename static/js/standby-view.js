$(function() {
  const overlayView = $("#overlay-view");
  const resultMailbox = $("#result-mailbox");
  const test = $(".test");
  let overlayOn = false;
  resultMailbox.click(function() {
    console.log("clicked");
    if(overlayOn) {
      overlayOn = false;
      test.addClass("slide-down").removeClass("slide-up");
    } else {
      overlayOn = true;
      test.addClass("slide-up").removeClass("slide-down");
    }
  })
})