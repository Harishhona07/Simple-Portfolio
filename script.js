// The page works without JavaScript. This only adds a copy-email button and the footer year.

(function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var button = document.getElementById("copy-email");
  var email = document.getElementById("email");
  if (!button || !email || !navigator.clipboard) {
    return;
  }

  button.hidden = false;
  button.addEventListener("click", function () {
    navigator.clipboard.writeText(email.textContent.trim()).then(
      function () {
        button.textContent = "Copied";
        setTimeout(function () {
          button.textContent = "Copy email";
        }, 2000);
      },
      function () {
        button.textContent = "Copy failed";
      }
    );
  });
})();