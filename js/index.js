import rotateCard from "./card.js";
import { submitForm, validarInput } from "./form.js";
import hamburgerButton from "./hamburger.js";
import { activeSection, hiddenMenu } from "./menu.js";
import toTop from "./top_btn.js";

document.addEventListener("DOMContentLoaded", e =>{
  hamburgerButton();
  activeSection();
  toTop();
  hiddenMenu();
  rotateCard();
  validarInput();
});

submitForm();