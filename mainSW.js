//Declaration for const for hacked links
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//Declaration for const for hidden and solid navbar
const navbar = document.querySelector(".navbar");
let prevScrollPos = window.pageYOffset;
//Declaration for const for scroll hidden elements
const hiddenElements = document.querySelectorAll(".hidden");
const planetsInner = document.querySelectorAll(".inner");
//Declaration for const
// Get all elements with class "slide"
const slides1 = document.querySelectorAll(".slide1");
const slides2 = document.querySelectorAll(".slide2");
const slides3 = document.querySelectorAll(".slide3");
// Get all elements with class "stage-1" to "stage-3"
const stage1 = document.querySelector(".stage-1");
const stage2 = document.querySelector(".stage-2");
const stage3 = document.querySelector(".stage-3");

//Declarations for functions
//Declaration for function for hacked links
document.querySelectorAll(".hacked-container").forEach(container => {
  const elements = container.querySelectorAll(".hacked");

  container.onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
      elements.forEach(element => {
        element.innerText = element.innerText.split("").map((letter, index) => {
          if (index < iterations) {
            return element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        }).join("");
      });

      if (iterations >= elements[0].dataset.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  }

  container.onmouseleave = event => {
    let iterations = 0;
    const interval = setInterval(() => {
      elements.forEach(element => {
        element.innerText = element.innerText.split("").map((letter, index) => {
          if (index < iterations) {
            return element.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        }).join("");
      });

      if (iterations >= elements[0].dataset.value.length) clearInterval(interval);

      iterations += 1;
    }, 30);
  }
});

//Declaration for function for hidden navbar
window.onscroll = function(){
    let currentScollPos = window.pageYOffset;

    if (prevScrollPos > currentScollPos || window.pageYOffset < 1) {
        navbar.classList.remove("scroll");
    }else{
        navbar.classList.add("scroll");
    }

    prevScrollPos = currentScollPos;
}

//Declaration for function for solid navbar
document.addEventListener("scroll", () => {

    if (window.scrollY > 0) {
        navbar.classList.add("solid");
    } else {
        navbar.classList.remove("solid");
    }
});

//Declaration for function for starry background
function starryBackground() {
    const star = document.createElement('span');
    star.classList.add("stars")
    const cont = document.querySelector('.starry-background');
    var value = Math.random() * 4;

    star.style.width = value + 'px';
    star.style.height = value + 'px';

    star.style.top = Math.random() * document.body.scrollHeight + 'px';
    star.style.left = Math.random() * innerWidth + 'px';

    cont.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 8000);
}
setInterval(starryBackground, 40);

//Declaration for function for hidden on scroll
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

//Declaration for slide functions
slides1.forEach(function(slide) {
    slide.addEventListener("click", function() {
        // Update selection and show corresponding section
        document.querySelector(".slide1").classList.add("active");
        document.querySelector(".slide2").classList.remove("active");
        document.querySelector(".slide3").classList.remove("active");
        document.querySelector(".stage-1").classList.add("active");
        document.querySelector(".stage-2").classList.remove("active");
        document.querySelector(".stage-3").classList.remove("active");
    });
});

slides2.forEach(function(slide) {
    slide.addEventListener("click", function() {
        // Update selection and show corresponding section
        document.querySelector(".slide1").classList.remove("active");
        document.querySelector(".slide2").classList.add("active");
        document.querySelector(".slide3").classList.remove("active");
        document.querySelector(".stage-1").classList.remove("active");
        document.querySelector(".stage-2").classList.add("active");
        document.querySelector(".stage-3").classList.remove("active");
    });
});

slides3.forEach(function(slide) {
    slide.addEventListener("click", function() {
        // Update selection and show corresponding section
        document.querySelector(".slide1").classList.remove("active");
        document.querySelector(".slide2").classList.remove("active");
        document.querySelector(".slide3").classList.add("active");
        document.querySelector(".stage-1").classList.remove("active");
        document.querySelector(".stage-2").classList.remove("active");
        document.querySelector(".stage-3").classList.add("active");
    });
});

// Declaration for function for hidden on scroll
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

// Observe each element in the planetsAnimate NodeList
planetsInner.forEach((planet) => {
    observer2.observe(planet);
});