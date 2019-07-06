const targets = Array.from(document.querySelectorAll('.js-scroll-trigger'));
const navbar = document.getElementById('mainNav');
const buttonScrollToTop = document.querySelector('.scroll-to-top');

//WINDOW LISTENERS
const collapseOnScroll = () => {
   if (window.pageYOffset > 100) {
       return navbar.classList.add('navbar-shrink');
   }
   return navbar.classList.remove('navbar-shrink');
}

const showScrollToTopButton = () => {
   if (window.pageYOffset > 100) {
       if (buttonScrollToTop.style.display == 'block') {
           return
       }
       buttonScrollToTop.animate({
            opacity: [0,1]
       }, 700)
       return buttonScrollToTop.style.display = 'block';
   }
   return buttonScrollToTop.style.display = 'none';
}

const windowFunctions = () => {
   collapseOnScroll();
   showScrollToTopButton();
}

window.addEventListener('scroll', () => windowFunctions());


//TARGETS LISTENERS
const getOffSetTop = (element) => {
   element = element.slice(1);
   return document.getElementById(element).offsetTop - 71;
}

const animateScroll = (element, e) => {
   e.preventDefault()
   window.scroll({
       top: getOffSetTop(element),
       behavior: 'smooth'
   })
}

const closeResponsiveMenu = () => {
   const navbar = document.querySelector('.navbar-collapse');
   if (navbar.classList.contains('show')) {
       navbar.classList.remove('show');
       navbar.classList.add('hide');
   }
}

const targetsFunctions = (element, e) => {
   animateScroll(element, e);
   closeResponsiveMenu();
}

targets.map(el => {
   el.addEventListener('click', (e) => targetsFunctions(el.hash, e))
})
