function downloadImage() {
  var canvas = document.getElementById("canvas");
  document.getElementById("download_image").href = canvas.toDataURL("image/png");

}
