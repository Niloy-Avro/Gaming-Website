function changeVideo() {
    let nextButton = document.querySelector('.next-btn');
    let video = document.querySelector('.hero-video');

    let movieList = ['res/hero-1.mp4', 'res/hero-2.mp4', 'res/hero-3.mp4', 'res/hero-4.mp4'];

    let index = 0;
    nextButton.addEventListener('click', function(){
        index = index+1;
        video.src = movieList[index];

        if(index === 3) {
            index = -1;
        }
    })
}
changeVideo();

