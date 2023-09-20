var swiper = new Swiper(".swiper-carousel", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 10,
    initialSlide: 3,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
     clickable: true
  }
});

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

AOS.init({      
  duration: 1800,
  easing: 'ease'
});