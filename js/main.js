var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    webm: 'video/world.webpm', // URL or relative path to webm video
    poster: 'img/poster.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  }, {
    // Attributes
});

var relax = new Rellax('.rocket');

if (document.body.clientWidth < 576) {
  relax.destroy();
}

AOS.init();