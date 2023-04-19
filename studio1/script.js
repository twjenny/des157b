(function() {
    'use strict';
    console.log('reading');

    const myVideo = document.querySelector('#myVideo');
    const text1 = document.getElementById('line1');
    const text2 = document.getElementById('line2');
    const text3 = document.getElementById('line3');
    const lyrics = {
        start: [0, 5, 10],
        stop: [4, 9, 14],
        line: [text1, text2, text3]
    }

    const loading = document.querySelector('.fa-umbrella-beach');
        myVideo.addEventListener('playing', function(){
            loading.style.display = 'none';
        })

    const intervalID = setInterval(checkTime, 1000);
        function checkTime() {
            for (let i = 0; i < lyrics.start.length; i++) {
                if (lyrics.start[i] < myVideo.currentTime && myVideo.currentTime < lyrics.stop[i]) {
                    lyrics.line[i].className = "showing";
                } else {
                    lyrics.line[i].className = "hidden";
                }
            }
        }
    // saturation change with mousemove
    myVideo.addEventListener('mousemove', function(event) {
        const saturation = event.clientX / window.innerWidth;
        myVideo.style.filter = "saturate(" + saturation + ")";
    });
})()