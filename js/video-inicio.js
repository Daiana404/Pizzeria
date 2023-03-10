const video = document.querySelector('.fondo');
let mediaQ = (x) => {
    if (x.matches) {
        video.src = "https://player.vimeo.com/progressive_redirect/playback/777652756/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=ee641c3d856c2d3b3adb61e9fd7abcfc1d0515cd117bd989b3e84e68fc6c1726";
    } else {
        video.src = "https://cdn.pixabay.com/vimeo/555532094/Pizza%20-%2075407.mp4?width=960&hash=7c9e4377bd509a5e7c04ae887b771fef87f5362d";
    }
}
const x = window.matchMedia("(max-width: 750px)");
mediaQ(x);
x.addListener(mediaQ);