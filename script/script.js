// i for loop
let i = 0

// dark mode script
// get html tag
const modesSwicher = document.getElementById("modeSwitch")
const html = document.getElementById("html")

// add event
modesSwicher.addEventListener("click", () => {
    if (html.classList.length > 0) {
        html.classList.remove("dark")
    } else {
        html.classList.add("dark")
    }
})

// ***********************************************************************

// dark mode mobile script
// get html tag
const mobileModesSwicher = document.getElementById("mobileModeSwitch")

mobileModesSwicher.addEventListener("click", () => {
    if (html.classList.length > 0) {
        html.classList.remove("dark")
    } else {
        html.classList.add("dark")
    }
})

// ***********************************************************************

// in mobile menu side bar close or open
// get html tag
const mobileMenuOpener = document.getElementById("mobileMenuOpener")
const mobileMenu = document.getElementById("mobileMenu")
const mobileMenuCloser = document.getElementById("mobileMenuCloser")
// for open
mobileMenuOpener.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
    }
})

// for close
mobileMenuCloser.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden")
    }
})
// ***************************************************************************

// in mobile menu side bar open or close shop menu
// get html tag
const mobileMenuShopOpener = document.getElementById("mobileMenuShopOpener")
const mobileMenuShop = document.getElementById("mobileMenuShop")

// add event
mobileMenuShopOpener.addEventListener("click", () => {
    if (mobileMenuShop.classList.contains("hidden")) {
        mobileMenuShop.classList.remove("hidden")
        mobileMenuShopOpener.classList.remove("rotate-0")
        mobileMenuShopOpener.classList.add("rotate-0")
    } else {
        mobileMenuShop.classList.add("hidden")
        mobileMenuShopOpener.classList.add("rotate-0")
        mobileMenuShopOpener.classList.remove("rotate-0")
    }

})

// mobile shop sidebar menu open or close
// get html tag
const mobileShopSidebarOpener = document.getElementById("mobileShopSidebarOpener")
const mobileShopSidebarCloser = document.getElementById("mobileShopSidebarCloser")
const mobileShopSidebar = document.getElementById("mobileShopSidebar")

// add event
// for open
mobileShopSidebarOpener.addEventListener("click", () => {
    if (mobileShopSidebar.classList.contains("hidden")) {
        mobileShopSidebar.classList.remove("hidden")
    }
})
// for close
mobileShopSidebarCloser.addEventListener("click", () => {
    if (!mobileShopSidebar.classList.contains("hidden")) {
        mobileShopSidebar.classList.add("hidden")
    }
})