var url = prompt("Enter URL Here (example: https://google.com)");
if (url == null) {
  alert('No URL Entered!');
}
else {
  document.body.innerHTML = "<iframe src='url' style='position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999999;'>Your browser does not support iframes</iframe>";
  alert('URL Loaded!');
}
