console.log("Website loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready");

  const copyrightYear = document.getElementById("copyrightYear");

  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});
