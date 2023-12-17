// Debounce function to delay hiding the navbar
function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }

  let prevScrollPos = window.pageYOffset;
  const navbar = document.querySelector('nav');

  function hideNavbarOnScroll() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
      // Scrolling up or at the top, show the navigation bar
      navbar.classList.remove('-translate-y-full');
    } else {
      // Scrolling down, hide the navigation bar
      navbar.classList.add('-translate-y-full');
    }

    prevScrollPos = currentScrollPos;
  }

  // Add event listener with debouncing (increased delay to 200ms)
  window.addEventListener('scroll', debounce(hideNavbarOnScroll, 200));

  // Smooth scroll function
  function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    // Get the top offset of the target element relative to the document
    const elementOffsetTop = targetElement.getBoundingClientRect().top;

    // Calculate the total offset by adding the current scroll position
    const offset = elementOffsetTop + window.pageYOffset; // Adjust the value based on your layout

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  // Add a click event listener to all links with the smooth scroll class
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      smoothScrollTo(this.getAttribute('href'));
    });
  });

