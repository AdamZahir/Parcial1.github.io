
const portadas = document.querySelectorAll('.portada');


portadas.forEach(portada => {
  portada.addEventListener('mouseenter', () => {
    portada.querySelector('img').style.opacity = '0.5';
    portada.querySelector('.play').style.opacity = '1';
  });


  portada.addEventListener('mouseleave', () => {
    portada.querySelector('img').style.opacity = '1';
    portada.querySelector('.play').style.opacity = '0';
  });
});
