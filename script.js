// script.js

document.addEventListener("DOMContentLoaded", function() {
    loadUrl();
});

function loadUrl() {
    var url = prompt("Enter URL Here (example: https://google.com)");

    if (url === null) {
        alert('No URL Entered!');
        return;
    }

    // Add default protocol if missing
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    var container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:99;';

    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.cssText = 'width:100%;height:100%;border:none;';
    
    container.appendChild(iframe);
    document.body.textContent = ''; // Clear the body
    document.body.appendChild(container);
    
    alert('URL Loaded!');
}
