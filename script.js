(function () {
  // When the user scrolls down 20px from the top of the document, show the button
  let navbar = document.getElementById("navbar");
  let toTopBtn = document.getElementById("toTop");
  window.onscroll = () => {
    scrollFunction();
  };
  document.querySelector("#about > .wrapper > section.about-img img").addEventListener("click", () => {
    window.open("myPic4.jpg", "_blank")
  })

  toTopBtn.style.display = "none";
  function scrollFunction() {
    // for nav bar
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  }

  toTopBtn.addEventListener("click", topFunction);
  scrollFunction();
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // topFunction()
})();

(function () {
  let menuToogler = document.getElementById("menu-toggler");
  let menu = document.getElementById("menu");
  let links = menu.querySelectorAll("a");
  // let text_reveal = menu.querySelector(".text_reveal")

  links.forEach(link => {
    link.addEventListener("mouseenter", (el) => {
      document.querySelector(".text_reveal").innerHTML=el.target.innerText
    })
    link.addEventListener("mouseout", (el) => {
      document.querySelector(".text_reveal").innerHTML=""
    })
  })


  menuToogler.addEventListener("click", (el) => {
    if (window.innerWidth <= 800) {
        if (menuToogler.classList.contains("clicked")) {
          menu.style.width = "0%";
          menuToogler.classList.remove("clicked");
        } else {
          menu.style.width = "100%";
          menuToogler.classList.add("clicked");
        }

        links.forEach((el) => {
          el.addEventListener("click", () => {
            menu.style.width = "0%";
            menuToogler.classList.remove("clicked");
          });
        });
    }
  })
})();
