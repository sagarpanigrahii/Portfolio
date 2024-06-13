window.addEventListener('load', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navMenu = document.querySelector('nav ul');
  
    toggleMenu.addEventListener('click', function() {
      navMenu.parentElement.classList.toggle('active');
    });
  
    const animateElements = document.querySelectorAll('.animate');
  
    function animateOnScroll() {
      animateElements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementPosition < windowHeight) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }
  
    animateOnScroll();
  
    window.addEventListener('scroll', animateOnScroll);
  });