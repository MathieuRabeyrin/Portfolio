document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementsByClassName('prev')[0];
  const nextBtn = document.getElementsByClassName('next')[0];
  const images = document.querySelectorAll('header figure img');
  let position = 0;

  const toggleClass = () => {
    images[position].classList.toggle('hidden');
  };

  const checkOverflow = () => {
    if (position == images.length)
      position = 0;
    else if (position == -1)
      position = images.length - 1;
  };
 
  prevBtn.addEventListener('click', () => {
    toggleClass();
    position--;
    checkOverflow();
    toggleClass();
  });

  nextBtn.addEventListener('click', () => {
    toggleClass();
    position++;
    checkOverflow();
    toggleClass();
  });

  const updateGrid = (cat) => {
    Array.from(document.querySelectorAll("[name='stage'], [name='ppe']")).map(card => card.removeAttribute("class"));
    if (cat == "PPE")
      Array.from(document.getElementsByName("stage")).map(card => card.setAttribute("class", "hide"));
    if (cat == "Stages")
      Array.from(document.getElementsByName("ppe")).map(card => card.setAttribute("class", "hide"));
  }

  const clearAllAttributes = (navFilter) => {
    for (let i = 0; i < navFilter.length; i++)
      navFilter[i].removeAttribute("class");
  }
  const setListenerFilter = () => {
    const navFilter = document.getElementById("project-nav").children;

    for (let i = 0; i < navFilter.length; i++)
      navFilter[i].addEventListener("click", () => {
        clearAllAttributes(navFilter);
        navFilter[i].setAttribute("class", "on");
        updateGrid(navFilter[i].textContent);
      });
  }

  setListenerFilter()
});