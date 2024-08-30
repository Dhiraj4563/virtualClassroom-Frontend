// video.js

// Function to handle video upload
function uploadVideo() {
    const videoInput = document.getElementById('videoUpload');
    const videoList = document.getElementById('videoList');
    const files = videoInput.files;

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const video = document.createElement('video');
            video.controls = true;
            video.src = URL.createObjectURL(files[i]);
            videoList.appendChild(video);
        }
    } else {
        alert('Please select a video to upload');
    }
}
