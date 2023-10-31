function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "Mayk brito usando óculos escuro em um fundo azul e roxo, com jaqueta preta, camiseta preta, barba, cabelo mediano"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Mayk brito usando óculos de grau em um fundo azul e roxo, com jaqueta preta, camiseta preta, barba, cabelo mediano"
    )
  }
}
