document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    effect: 'parallax',
    parallax: true,
    speed: 600,
    autoplay: {
      delay: 3000,
    }
  });
});
