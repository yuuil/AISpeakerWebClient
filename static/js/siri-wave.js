const siriWave = new SiriWave({
  container: document.getElementById('siri-wave'),
  width: 800,
  height: 120,
  style: 'ios9',
  autostart: true,
  amplitude: 0
});

function randomAmplitude() {
  const value = 1;
  
  siriWave.setAmplitude(value);
  requestAnimationFrame(randomAmplitude);
}

randomAmplitude();

window.onload = function() {
  //SiriWave는 이미 만들어진 클래스이기 때문에 너비를 임의로 제어하기 위해 onload 이벤트 사용.
  const siri = document.querySelector('#siri-wave > canvas');
  siri.style.width = "100%";
}

$(function() {
  $("#speaker-circle, #siri-wave").click(function() {
    if($("#speaker-circle").hasClass("on")) {
      console.log("Speaker Off");
      $("#siri-wave").css({"display": "none"});
      $("#speaker-circle").removeClass("on");
    } else {
      console.log("Speaker On");
      $("#siri-wave").css({"display": "block"});
      $("#speaker-circle").addClass("on");
    }
  })
})

