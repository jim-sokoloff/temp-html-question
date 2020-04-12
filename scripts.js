var IEslider = document.getElementById("IE");
var IEout = document.getElementById("IEout");
var BPMslider = document.getElementById("BPM");
var BPMout = document.getElementById("BPMout");

var updateIE = function (v) {
  var i = "1";
  var e = "1";

  if (v < 50) {
    v = 60 - v;
    i = (v / 10).toFixed(1);
  } else if (v > 50) {
    v = v - 40;
    e = (v / 10).toFixed(1);
  }

  IEout.innerHTML = i + " : " + e;
};
var updateBPM = function (v) {
  var bpm = parseInt(v);

  bpm = ((bpm + 8) / 2).toFixed(1);

  BPMout.innerHTML = bpm;
};

// Update the current slider value (each time you drag the slider handle)
IEslider.oninput = function () {
  updateIE(this.value);
};

updateIE(IEslider.value); // Display the default slider value

BPMslider.oninput = function () {
  updateBPM(this.value);
};

updateBPM(BPMslider.value); // Display the default slider value
