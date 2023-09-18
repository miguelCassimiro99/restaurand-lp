window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0 );
	});

	function toggleMenu(){
    console.log('toggleMenu');
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

	}
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
