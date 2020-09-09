const sendEmail = async () => {
  let email = document.querySelector("#name").value;
  console.log(email);
  if (validateEmail(email)) {
    button.removeEventListener("click", sendEmail);
    button.innerHTML = `<div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>`;
    let response = await fetch("http://192.168.0.11:3000/api/email", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Usuario: email,
      }),
    });
    console.log(response);
    if (response.status == 200) {
      button.innerHTML = ` 
      <div class="success-checkmark">
        <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
        </div>
    </div>`;
    } else {
      button.innerHTML = `Algo salió mal, inténtalo de nuevo`;
    }
  } else {
    alert("Introduce un correo válido.");
  }
};

document.querySelector("input").addEventListener("input", (e) => {
  if (e.target.value) {
    e.target.classList.add("has-value");
  } else {
    e.target.classList.remove("has-value");
  }
});

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

let button = document.querySelector("#send");

button.addEventListener("click", sendEmail);

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
