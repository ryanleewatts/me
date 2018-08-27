
if("undefined"==typeof window.datawrapper)window.datawrapper={};window.datawrapper["rjOFz"]={},window.datawrapper["rjOFz"].embedDeltas={"100":632,"200":522,"300":478,"400":462,"500":462,"700":445,"800":445,"900":445,"1000":445},window.datawrapper["rjOFz"].iframe=document.getElementById("datawrapper-chart"),window.datawrapper["rjOFz"].iframe.style.height=window.datawrapper["rjOFz"].embedDeltas[Math.min(1e3,Math.max(100*Math.floor(window.datawrapper["rjOFz"].iframe.offsetWidth/100),100))]+"px",window.addEventListener("message",function(a){if("undefined"!=typeof a.data["datawrapper-height"])for(var b in a.data["datawrapper-height"])if("rjOFz"==b)window.datawrapper["rjOFz"].iframe.style.height=a.data["datawrapper-height"][b]+"px"});

var onresize = function() {
  if (window.matchMedia("(max-width: 479px)").matches) {
      document.getElementById("header").innerHTML = "See that map? I made that.";
  }

  if (window.matchMedia("(min-width: 480px)").matches) {
      document.getElementById("header").innerHTML = "See that chart? I made that.";
  }
}
window.addEventListener("resize", onresize);

function newChart() {

  var charts = ['hlmwK', 'JLSEh', 'U5NFZ', 'cLXWh', 'PmWy3', '85Una', 'VxoiA', 'pZdWA', '1Lf4V', 'bty9b', 'NfJfb', 'evWXC', 'jqRQi', 'V4usC', 'WeoK0', 'pjkzc', 'VScI2', 'rjOFz', '8Rlmz', 'wwwrC', 'jBzPN', 'Kskap', 'SMwXx'];

  var chartcode = charts[Math.floor(Math.random()*charts.length)];

  newchart = "<iframe id='datawrapper-chart' src='http://datawrapper.dwcdn.net/" + chartcode + "' scrolling='no' frameborder='0' allowtransparency='true' style='width: 0; min-width: 100% !important;' height='462'></iframe>";

  document.getElementById("chart").innerHTML = newchart;

  if("undefined"==typeof window.datawrapper)window.datawrapper={};window.datawrapper[chartcode]={},window.datawrapper[chartcode].embedDeltas={"100":632,"200":522,"300":478,"400":462,"500":462,"700":445,"800":445,"900":445,"1000":445},window.datawrapper[chartcode].iframe=document.getElementById("datawrapper-chart"),window.datawrapper[chartcode].iframe.style.height=window.datawrapper[chartcode].embedDeltas[Math.min(1e3,Math.max(100*Math.floor(window.datawrapper[chartcode].iframe.offsetWidth/100),100))]+"px",window.addEventListener("message",function(a){if("undefined"!=typeof a.data["datawrapper-height"])for(var b in a.data["datawrapper-height"])if(chartcode==b)window.datawrapper[chartcode].iframe.style.height=a.data["datawrapper-height"][b]+"px"});

  console.log(newchart);

}
