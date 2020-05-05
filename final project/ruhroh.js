$(document).ready(function(){
  var video = document.getElementById('vid')
  var choice1 = $("choice1");
  var choice2 = $("choice2");
  var choice3 = $("choice3");
  choice1.hide();
  choice2.hide();
  choice3.hide();

  choice1.click(function() {
      cutsceneIndex = cutscene[cutsceneIndex].choice1result;
      loadcutscene();
  });

  choice2.click(function() {
      cutsceneIndex = cutscene[cutsceneIndex].choice2result;
      loadcutscene();
  });

  choice3.click(function() {
      cutsceneIndex = cutscene[cutsceneIndex].choice3result;
      loadcutscene();
  });

  loadcutscene();

  function loadcutscene() {
    video.src = cutscene[cutsceneIndex].vid;
    video.play();

    choice1.hide();
    choice2.hide();
    choice3.hide();

    setTimeout(function () {
      if (cutscene[cutsceneIndex].choice1) {
        choice1.show();
        choice1.html("<h1>"+cutscene[cutsceneIndex].choice1+"</h1");
      }
      if (cutscene[cutsceneIndex].choice2) {
        choice2.show();
        choice2.html("<h1>"+cutscene[cutsceneIndex].choice2+"</h1");
      }
      if (cutscene[cutsceneIndex].choice3) {
        choice3.show();
        choice1.html("<h1>"+cutscene[cutsceneIndex].choice3+"</h1");
      }
    }, cutscene[cutsceneIndex].videoTime*1000);
  }
}};

var cutsceneIndex = 1;
var cutscene = [];

cutscene [0] = {
}

cutscene [1] = {
  vid : "1.mp4",
  choice1 : "eat the shrooms",
  choice2 : "don't??",
  choice1result : 2,
  choice2result : 2,
  videoTime: 21
}

cutscene [2] = {
  vid : "2.mp4",
  choice1 : "was that door always there?",
  choice2 : "ooh, door",
  choice1result : 3,
  choice2result : 3,
  videoTime: 60
}

})
