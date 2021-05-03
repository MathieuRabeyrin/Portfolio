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
});