const timeout_1 = setTimeout(addEmailToDom, 1000);

function addEmailToDom() {
  document.getElementById("email").href = "mailto:trevor.c.hudson@gmail.com"
}

const timeout_2 = setTimeout(hideNav,3000);

function hideNav() {
  const el = document.getElementById("splash_page");
  el.style.visibility = 'visible';
}
