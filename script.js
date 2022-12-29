const html = document.documentElement
const profileImage = document.querySelector('#profile-image')

function toggleMode() {
  html.classList.toggle('light') 
  profileImage.src = html.classList.contains('light') 
    ? "./assets/Ellipse-light.png"
    : "./assets/Ellipse.png"
}