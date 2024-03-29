const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggler.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
  
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//slider code
const slider = document.querySelector('.scroller');
const images = ['./img/plants1.png', './img/plants2.jpg', './img/plants3.jpg'];
const texts = ['Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Antenibh mauris cursusmattis molestie a iaculis. Pulvinar sapien et ligulaullamcorper malesuada proin libero nunc consequat.Lacus laoreet non curabitur gravida arcu ac tortor', 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Antenibh mauris cursusmattis molestie a iaculis. Pulvinar sapien et ligulaullamcorper malesuada proin libero nunc consequat.Lacus laoreet non curabitur gravida arcu ac tortor', 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Antenibh mauris cursusmattis molestie a iaculis. Pulvinar sapien et ligulaullamcorper malesuada proin libero nunc consequat.Lacus laoreet non curabitur gravida arcu ac tortor'];
let currentIndex = 0;

function updateSlider() {
  slider.querySelector('.sliderimg').style.backgroundImage = `url(${images[currentIndex]})`;
  slider.querySelector('.textcontainer p').innerHTML = texts[currentIndex];
}

function showText() {
  slider.querySelector('.textcontainer').style.opacity = 1;
}

function hideText() {
  slider.querySelector('.textcontainer').style.opacity = 0;
}

setInterval(function() {
  hideText();
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
  setTimeout(showText, 500);
}, 5000);