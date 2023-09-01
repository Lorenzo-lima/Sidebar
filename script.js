function getElements() {
  const toggleBtn = document.querySelector("#togglebtn")
  const imgOpen = document.querySelector(".open")
  const imgClose = document.querySelector(".close")
  const sidebar = document.querySelector("#sidebar")
  const firstImg = document.querySelector(".menu img:first-child")
  const menu = document.querySelector(".menu")
  const icons = document.querySelectorAll(".icons div")
  const iconsText = document.querySelectorAll(".iconsText")
  const logout = document.querySelector(".logout")
  const profile = document.querySelector(".logout div:first-child")

  return {
    toggleBtn,
    imgOpen,
    imgClose,
    sidebar,
    firstImg,
    menu,
    icons,
    iconsText,
    logout,
    profile,
  }
}

function toggleSidebar() {
  const elements = getElements()
  const {
    sidebar,
    imgOpen,
    imgClose,
    firstImg,
    menu,
    icons,
    iconsText,
    logout,
    profile,
  } = elements

  if (sidebar.classList.contains("expanded")) {
    sidebar.classList.remove("expanded")
    imgClose.style.display = "none"
    imgOpen.style.display = "block"
    firstImg.style.display = "none"
    logout.style.justifyContent = "center"

    iconsText.forEach((element) => {
      element.style.display = "none"
    })

    profile.style.display = "none"
  } else {
    sidebar.classList.add("expanded")
    imgOpen.style.display = "none"
    imgClose.style.display = "block"
    menu.style.justifyContent = "flex-end"
    firstImg.style.display = "flex"

    icons.forEach((div) => {
      div.style.justifyContent = "space-between"
      div.addEventListener("click", () => {
        icons.forEach((otherItem) => {
          otherItem.classList.remove("active")
        })
        div.classList.add("active")
      })
      div.addEventListener("mouseover", () => {
        div.classList.add("hover")
      })
      div.addEventListener("mouseout", () => {
        div.classList.remove("hover")
      })
    })

    iconsText.forEach((element) => {
      element.style.display = "flex"
      element.style.position = "absolute"
      element.style.left = "74px"
    })

    logout.style.justifyContent = "space-between"
    profile.classList.add("fadeAnim")
    profile.style.display = "flex"
  }
}

function setupInitialStyles() {
  const elements = getElements()
  const { sidebar, imgOpen } = elements

  window.addEventListener("load", () => {
    if (sidebar.classList.contains("expanded")) {
      imgOpen.style.display = "none"
    } else {
      imgOpen.style.display = "block"
    }

    // Chamar a função para configurar os ícones ao carregar a página
    setupIcons()
  })
}

function setupIcons() {
  const elements = getElements()
  const { icons } = elements

  icons.forEach((div) => {
    div.style.justifyContent = "space-between"
    div.addEventListener("click", () => {
      icons.forEach((otherItem) => {
        otherItem.classList.remove("active")
      })
      div.classList.add("active")
    })
    div.addEventListener("mouseover", () => {
      div.classList.add("hover")
    })
    div.addEventListener("mouseout", () => {
      div.classList.remove("hover")
    })
  })
}

// Configurar o evento de clique no botão de alternância
const toggleBtn = getElements().toggleBtn
toggleBtn.addEventListener("click", toggleSidebar)

// Configurar estilos iniciais
setupInitialStyles()
