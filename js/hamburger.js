export default function hamburgerButton(){
  const $hamburgerBtn = document.querySelector(".hamburger"),
  $menu = document.querySelector(".menu"),
  $body = document.querySelector("body");
  document.addEventListener("click", e =>{
    if (e.target.matches(".hamburger *")) {
        $hamburgerBtn.classList.toggle("is-active");
        $menu.classList.toggle("menu--visible");
        $body.classList.toggle("overflow-hidden")
    }
  });
  
}