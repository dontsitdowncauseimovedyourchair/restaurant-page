import "./styles/home.css";
import "./styles/menu.css"
import home from "./modules/home.js"
import menu from "./modules/menu.js";
import aboutUs from "./modules/about.js";

const content = document.getElementById("content");
const homeButton = document.getElementById("home-button")
const menuButton = document.getElementById("menu-button")
const aboutButton = document.getElementById("about-button")

homeButton.addEventListener("click", () => {
    removeContent()
    home()
})

menuButton.addEventListener("click", () => {
    removeContent()
    menu()
})

aboutButton.addEventListener("click", () => {
    removeContent()
    aboutUs()
});

home()


function removeContent() {
    while (content.children[0]) {
        content.children[0].remove();
    }
    document.body.style.background = "";
}