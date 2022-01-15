const clicked = () => {}

let container = document.getElementById('aTag')
let atag = document.getElementsByClassName('ham-but')
let but = document.getElementById('hamburger')
but.addEventListener('click', modifyclass)

function modifyclass() {
  if (container.classList.value == 'button') {
    container.classList.add('ham-but')
  } else {
    container.classList.remove('ham-but')
  }
}
