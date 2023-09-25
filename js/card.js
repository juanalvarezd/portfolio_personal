const d = document;

const rotateCard = () => {
  const $cards = d.querySelectorAll(".flip-card");

  $cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.currentTarget === card) card.firstElementChild.classList.toggle("rotate-180");
    });
  });
};

export default rotateCard;
