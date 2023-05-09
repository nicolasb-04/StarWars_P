//Declaration for const for hacked links
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//Declaration for const for hidden and solid navbar
const navbar = document.querySelector(".navbar");
let prevScrollPos = window.pageYOffset;


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

    if (prevScrollPos > currentScollPos || window.pageYOffset < 50) {
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