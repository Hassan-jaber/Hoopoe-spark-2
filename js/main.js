

let preloader = document.getElementById("preloader")
let navbar = document.querySelector(".navbar")
let body = document.querySelector("body")
let slider_container = document.querySelector(".slider-container")
window.addEventListener(("load"), _ =>{
    setTimeout(() => {
        preloader.style.display="none"
        navbar.style.display="block"
        slider_container.style.display="flex"
    }, 5000);
})


window.addEventListener('load', function() {
    window.addEventListener('scroll', function() {
      var scroll_top = document.documentElement.scrollTop || document.body.scrollTop,
          scroll_top_w = scroll_top + window.innerHeight,
          scroll_top_w2 = scroll_top + (window.innerHeight / 2);
  
      var siteHeader = document.querySelector('.site-header');
      if (scroll_top > 50) {
        siteHeader.classList.add('fixed');
      } else {
        siteHeader.classList.remove('fixed');
      }
    });
  });

// -------------------

// Get all elements with class name "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each nav-link
navLinks.forEach(navLink => {
  navLink.addEventListener('click', function() {
    // Remove "active" class from all nav-links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add "active" class to the clicked nav-link
    this.classList.add('active');
  });
});


// ----------------------

// Start Counter
const counters = document.querySelectorAll(".value");
const speed = 1000;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});

// -----------------


var btn = document.getElementById('button');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
