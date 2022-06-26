window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.upper-menu'),
  menuItem = document.querySelectorAll('.upper-menu-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      menu.classList.toggle('upper-menu-active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          menu.classList.toggle('upper-menu-active');
          hamburger.classList.toggle('hamburger-active');
      })
  })
})