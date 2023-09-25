export { activeSection, hiddenMenu };

const d = document;

function activeSection() {
  const $sections = d.querySelectorAll("section[data-section]"),
    $links = d.querySelectorAll("a[data-section]");

  const cb = (entries) => {
    $links.forEach((link) => {
      const id = link.getAttribute("href").slice(1),
        section = d.getElementById(id);

      if (
        section &&
        entries.some(
          (entry) => entry.target === section && entry.isIntersecting
        )
      ) {
        link.classList.add("menu__item-active");
        link.previousElementSibling.classList.add("menu__item-active");
      } else {
        link.classList.remove("menu__item-active");
        link.previousElementSibling.classList.remove("menu__item-active");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5,
  });

  $sections.forEach((section) => observer.observe(section));
}

function hiddenMenu() {
  const $menu = d.querySelector(".menu"),
    $hamburgerBtn = d.querySelector(".hamburger"),
    $body = d.querySelector("body");

  d.addEventListener("click", (e) => {
    let target = e.target;
    if (target.className === "menu__link") {
      $hamburgerBtn.classList.toggle("is-active");
      $menu.classList.toggle("menu--visible");
      $body.classList.remove("overflow-hidden");
    }
  });
}
