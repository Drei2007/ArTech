document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(v => {
      if (v !== video) v.pause();
    });
  });
});