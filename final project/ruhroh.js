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
  choiceFlavorTime: 2.5,
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

cutscene [3] = {
  vid : "assets/3.mp4",
  choice1 : "im dead",
  choice1Flavor : ">> uhh wait just give it a sec",
  choiceFlavorTime : 2.5,
  choice1result : 4,
  videoTime: 33
}

cutscene [4] = {
  vid : "assets/4.mp4",
  choice1 : "am i in heaven?",
  choice2 : "are you god?",
  choice1result : 5,
  choice2result : 6,
  videoTime: 25
}

cutscene [5] = {
  vid : "assets/5.mp4",
  choice1 : "sorry. how are you talking?",
  choice2 : "so...you're not god?",
  choice1result : 7,
  choice2result : 6,
  videoTime: 8
}

cutscene [6] = {
  vid : "assets/6.mp4",
  choice1 : "then, uh, how are you talking?",
  choice2 : "i know what a dog is",
  choice1result : 7,
  choice2result : 8,
  videoTime: 7
}

cutscene [7] = {
  vid : "assets/7.mp4",
  choice1 : "i know what a dog is",
  choice2 : "i KNOW what a dog is",
  choice1result : 8,
  choice2result : 8,
  videoTime: 9
}

cutscene [8] = {
  vid : "assets/8.mp4",
  choice1 : "yes!! you are a dog",
  choice1result : 9,
  videoTime: 7
}

cutscene [9] = {
  vid : "assets/9.mp4",
  choice1 : "you seem, irritated.",
  choice2 : "are you, really a dog?",
  choice1result : 10,
  choice2result : 11,
  videoTime: 7
}

cutscene [10] = {
  vid : "assets/10.mp4",
  choice1 : "are you, uh, really a dog?",
  choice1result : 11,
  videoTime: 14
}

cutscene [11] = {
  vid : "assets/11.mp4",
  choice1 : "...i think its time to wake up",
  choice1result : 12,
  videoTime: 28
}

cutscene [12] = {
  vid : "assets/12.mp4",
  choice1 : "uhh i guess start over",
  choice1result : 1,
  videoTime: 5
}
