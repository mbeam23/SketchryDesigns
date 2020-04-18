function menuToggle() {
  if (document.body.classList.contains('menu-active')) {
    document.body.classList.remove('menu-active')
  } else {
    document.body.classList.add('menu-active')
  }
}

if (document.querySelector('.menu-toggle')) {
  document.querySelector('.menu-toggle').addEventListener('click', menuToggle)
}
