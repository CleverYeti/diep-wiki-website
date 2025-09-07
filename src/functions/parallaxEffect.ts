import "./parallaxEffect.css"

let mouseX = 0 // middle of screen
let mouseY = 0 // middle of screen
let currentX = 0
let currentY = 0
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX / window.innerWidth * 2 - 1
  mouseY = event.clientY / window.innerHeight * 2 - 1
})

function parallaxFrame() {
  currentX = currentX + (mouseX - currentX) * 0.1
  currentY = currentY + (mouseY - currentY) * 0.1
  document.body.style.setProperty("--parallax-x", currentX + "")
  document.body.style.setProperty("--parallax-y", currentY + "")
}

export function initParallaxEffect() {
  parallaxFrame()
  setInterval(parallaxFrame, 1000 / 60)
}