function playVideo(videoFileName) {
    const videoElement = document.querySelector(`video[src="${videoFileName}"]`);
    
    if (videoElement) {
        videoElement.play();
        videoElement.addEventListener('playing', function() {
            videoElement.playbackRate = 1.25;
        });
    }
}
