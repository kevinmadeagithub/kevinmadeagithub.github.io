$(document).ready(function(){
  var video = document.getElementById('vid')
  var choice1 = $("#choice1");
  var choice2 = $("#choice2");
  var choice3 = $("#choice3");
  choice1.hide();
  choice2.hide();
  choice3.hide();

  choice1.click(function() {
      if(cutscene[cutsceneIndex].choice1Flavor){
        choice2.hide();
        choice3.hide();
        choice1.html("<h1><span>"+cutscene[cutsceneIndex].choice1Flavor+"</span></h1>");
        setTimeout(function () {
          cutsceneIndex = cutscene[cutsceneIndex].choice1result;
          loadcutscene();
        }, cutscene[cutsceneIndex].choiceFlavorTime * 1000);
      } else {
        cutsceneIndex = cutscene[cutsceneIndex].choice1result;
        loadcutscene();
      }
  });

  choice2.click(function() {
    if(cutscene[cutsceneIndex].choice2Flavor){
      choice1.hide();
      choice3.hide();
      choice2.html("<h1><span>"+cutscene[cutsceneIndex].choice2Flavor+"</span></h1>");
      setTimeout(function () {
        cutsceneIndex = cutscene[cutsceneIndex].choice2result;
        loadcutscene();
      }, cutscene[cutsceneIndex].choiceFlavorTime * 1000);
    } else {
        cutsceneIndex = cutscene[cutsceneIndex].choice2result;
        loadcutscene();
    }
  });

  choice3.click(function() {
    if(cutscene[cutsceneIndex].choice3Flavor){
      choice1.hide();
      choice2.hide();
      choice3.html("<h1><span>"+cutscene[cutsceneIndex].choice3Flavor+"</span></h1>");
      setTimeout(function () {
        cutsceneIndex = cutscene[cutsceneIndex].choice3result;
        loadcutscene();
      }, cutscene[cutsceneIndex].choiceFlavorTime * 1000);
  } else {
      cutsceneIndex = cutscene[cutsceneIndex].choice3result;
      loadcutscene();
    }
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
        choice1.html("<div><h1>"+cutscene[cutsceneIndex].choice1+"</h1></div>");
      }
      if (cutscene[cutsceneIndex].choice2) {
        choice2.show();
        choice2.html("<div><h1>"+cutscene[cutsceneIndex].choice2+"</h1></div>");
      }
      if (cutscene[cutsceneIndex].choice3) {
        choice3.show();
        choice1.html("<div><h1>"+cutscene[cutsceneIndex].choice3+"</h1></div>");
      }
    }, cutscene[cutsceneIndex].videoTime*1000);
  }
});

var cutsceneIndex = 1;
var cutscene = [];

cutscene [0] = {
}

cutscene [1] = {
  vid : "assets/1.mp4",
  choice1 : "eat the shrooms",
  choice2 : "don't??",
  choice2Flavor: ">> error: drugs r inevitable",
  choiceFlavorTime: 2,
  choice1result : 2,
  choice2result : 2,
  videoTime: 21
}

cutscene [2] = {
  vid : "assets/2.mp4",
  choice1 : "was that door always there?",
  choice2 : "ooh, door",
  choice1result : 3,
  choice2result : 3,
  videoTime: 60
}
