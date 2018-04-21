window.addEventListener("resize", function(){
  dimensions();
});

(function dimensions() {
  document.getElementById('width').innerText =  document.documentElement.clientWidth;
  document.getElementById('height').innerText =  document.documentElement.clientHeight;
}());

function dimensions() {
  document.getElementById('width').innerText =  document.documentElement.clientWidth;
  document.getElementById('height').innerText =  document.documentElement.clientHeight;
}
