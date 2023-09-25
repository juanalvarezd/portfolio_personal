export {validarInput, submitForm}


const validarInput = () => {
  const $form = document.querySelector(".form");
  $form.addEventListener("input", (e) => {
    if (e.target.hasAttribute("pattern")) {
      const error = e.target.getAttribute("title");
      validar(e.target, error);
    }
  });
};

function validar(input, error) {
  let $label = document.querySelector(`.form__error--${input.name}`);
  const pattern = new RegExp(input.getAttribute("pattern")),
    inputContent = input.value;

  if (!pattern.test(inputContent)) {
    if (!$label) {
      $label = document.createElement("label");
      $label.classList.add("form__error", `form__error--${input.name}`);
      input.insertAdjacentElement("afterend", $label);
      $label.innerText = `${error}`;
    }
    $label.classList.remove("display-none");
  } else {
    $label.classList.add("display-none");
  }
}

const submitForm = () => {
  const $form = document.querySelector(".form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendData(e.target);
  });
};

async function sendData(form) {
  const $loader = form.querySelector(".form__loader");
  $loader.classList.remove("display-none");
  const options = {
    method: "POST",
    body: new FormData(form),
  };

  try {
    let res = await fetch(
        "https://formsubmit.co/ajax/juanalvarezd87@gmail.com",
        options
      ),
      json = await res.json();
    
     if (!res.ok) throw { status: res.status, statusText: res.statusText };
    
     await $loader.classList.add("display-none");
    
    form.insertAdjacentHTML(
      "beforeend",
      `<p class="form__success">Gracias por contactarme!</p>`
    );

    setTimeout(() => {
      document.querySelector(".form__success").classList.add("display-none");
    }, 5000);
    
    form.reset();
  
  } catch (error) {
    let message = error.statusText || "Error al enviar el formulario";
    form.insertAdjacentHTML(
      "beforeend",
      `<span> Error: <strong>${error.status}: ${message}</strong> </span>`
    );
  }
}
