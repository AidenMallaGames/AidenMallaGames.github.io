// script.js

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

    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.cssText = 'position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:99;';
    iframe.textContent = 'Your browser does not support iframes';
    
    // Replace the body content with the iframe
    document.body.innerHTML = '';
    document.body.appendChild(iframe);
    
    alert('URL Loaded!');
}

loadUrl();
