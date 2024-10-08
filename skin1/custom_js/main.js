// iframe 내 video 태그에 width 100% 적용
window.onload = function() {
    var iframe = document.getElementById('ytplayer');
    
    iframe.onload = function() {
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        var video = iframeDocument.querySelector('video');
        
        if (video) {
            video.style.width = '100%';  // video 태그에 width 100% 적용
        }
    };
};