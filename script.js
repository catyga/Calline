let imgBx = document.querySelectorAll('.imgBx');
imgBx.forEach(popup => popup.addEventListener('click', () =>{
  popup.classList.toggle('active')
}));

function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}
