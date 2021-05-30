document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    const header = document.getElementById("main-menu");

    if (window.scrollY == 0)
      header.classList.remove("scrolled");
    else
      header.classList.add("scrolled");
  })
});