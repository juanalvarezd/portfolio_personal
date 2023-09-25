const d = document,
w = window;

 const toTop = () => {
  const $toTopBtn = d.querySelector(".to-top");

  d.addEventListener("click", e => {
    if (e.target.matches(".to-top, .to-top *") ) {
      scrollTo(0,0)
    }
  });
  
  w.addEventListener("scroll", e =>{
    if (scrollY >= 400) {
      $toTopBtn.classList.add("is-visible")
    } else{
      $toTopBtn.classList.remove("is-visible")
    }
  });
}

export default toTop;