import fettuccineImage from "../assets/fettuccine-alfredo.jpeg";
import truffleTagliatelleImage from "../assets/truffle-tagliatelle.jpeg";
import lobsterRavioliImage from "../assets/lobster-ravioli.jpeg";
import porciniRisottoImage from "../assets/porcini-risotto.jpeg";
import squidInkSpaghettiImage from "../assets/squid-ink-spaghetti.jpeg";
import wildBoarPappardelleImage from "../assets/wild-boar-pappardelle.jpeg";
import cannelloniImage from "../assets/spinach-ricotta-cannelloni.jpeg";
import gnocchiPestoImage from "../assets/gnocchi-pesto.jpeg";

import negroniImage from "../assets/negroni.jpeg";
import limoncelloMartiniImage from "../assets/limoncello-martini.jpeg";
import aperolSpritzImage from "../assets/aperol-spritz.jpeg";
import espressoMartiniImage from "../assets/espresso-martini.jpeg";


export default function menu() {
    let content = document.getElementById("content");

    let menuText = document.createElement("h2");
    menuText.id = "menu-text";
    menuText.textContent = "Menu";
    content.appendChild(menuText);

    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    content.appendChild(menuContainer);

    let pastaText = document.createElement("p");
    pastaText.id = "pasta-text";
    pastaText.textContent = "Pastas"
    let pastaSection = document.createElement("div");
    pastaSection.classList.add("menu-section");
    menuContainer.appendChild(pastaSection);
    pastaSection.appendChild(pastaText);
    let pastaGrid = document.createElement("div")
    pastaGrid.classList.add("menu-grid")
    pastaSection.appendChild(pastaGrid)


    // 0. Fettuccine Alfredo
    let fettuccineAlfredo = document.createElement("div");
    fettuccineAlfredo.classList.add("pasta-container");
    let fettuccineImg = document.createElement("img");
    fettuccineImg.classList.add("pasta-img");
    fettuccineImg.src = fettuccineImage;
    let fettuccineText = document.createElement("p");
    fettuccineText.classList.add("pasta-name");
    fettuccineText.textContent = "Fettuccine Alfredo";
    fettuccineAlfredo.appendChild(fettuccineImg);
    fettuccineAlfredo.appendChild(fettuccineText);
    pastaGrid.appendChild(fettuccineAlfredo);


    // 1. Truffle Tagliatelle
    let truffleTagliatelle = document.createElement("div");
    truffleTagliatelle.classList.add("pasta-container");
    let truffleImg = document.createElement("img");
    truffleImg.classList.add("pasta-img");
    truffleImg.src = truffleTagliatelleImage;
    let truffleText = document.createElement("p");
    truffleText.classList.add("pasta-name");
    truffleText.textContent = "Truffle Tagliatelle";
    truffleTagliatelle.appendChild(truffleImg);
    truffleTagliatelle.appendChild(truffleText);
    pastaGrid.appendChild(truffleTagliatelle);

// 2. Lobster Ravioli
    let lobsterRavioli = document.createElement("div");
    lobsterRavioli.classList.add("pasta-container");
    let lobsterImg = document.createElement("img");
    lobsterImg.classList.add("pasta-img");
    lobsterImg.src = lobsterRavioliImage;
    let lobsterText = document.createElement("p");
    lobsterText.classList.add("pasta-name");
    lobsterText.textContent = "Lobster Ravioli";
    lobsterRavioli.appendChild(lobsterImg);
    lobsterRavioli.appendChild(lobsterText);
    pastaGrid.appendChild(lobsterRavioli);

// 3. Porcini Mushroom Risotto
    let porciniRisotto = document.createElement("div");
    porciniRisotto.classList.add("pasta-container");
    let porciniImg = document.createElement("img");
    porciniImg.classList.add("pasta-img");
    porciniImg.src = porciniRisottoImage;
    let porciniText = document.createElement("p");
    porciniText.classList.add("pasta-name");
    porciniText.textContent = "Porcini Mushroom Risotto";
    porciniRisotto.appendChild(porciniImg);
    porciniRisotto.appendChild(porciniText);
    pastaGrid.appendChild(porciniRisotto);

// 4. Squid Ink Spaghetti
    let squidInk = document.createElement("div");
    squidInk.classList.add("pasta-container");
    let squidImg = document.createElement("img");
    squidImg.classList.add("pasta-img");
    squidImg.src = squidInkSpaghettiImage;
    let squidText = document.createElement("p");
    squidText.classList.add("pasta-name");
    squidText.textContent = "Squid Ink Spaghetti";
    squidInk.appendChild(squidImg);
    squidInk.appendChild(squidText);
    pastaGrid.appendChild(squidInk);

// 5. Pappardelle with Wild Boar Ragu
    let wildBoar = document.createElement("div");
    wildBoar.classList.add("pasta-container");
    let boarImg = document.createElement("img");
    boarImg.classList.add("pasta-img");
    boarImg.src = wildBoarPappardelleImage;
    let boarText = document.createElement("p");
    boarText.classList.add("pasta-name");
    boarText.textContent = "Pappardelle al Cinghiale (Wild Boar)";
    wildBoar.appendChild(boarImg);
    wildBoar.appendChild(boarText);
    pastaGrid.appendChild(wildBoar);

// 6. Spinach & Ricotta Cannelloni
    let cannelloni = document.createElement("div");
    cannelloni.classList.add("pasta-container");
    let cannelloniImg = document.createElement("img");
    cannelloniImg.classList.add("pasta-img");
    cannelloniImg.src = cannelloniImage;
    let cannelloniText = document.createElement("p");
    cannelloniText.classList.add("pasta-name");
    cannelloniText.textContent = "Spinach & Ricotta Cannelloni";
    cannelloni.appendChild(cannelloniImg);
    cannelloni.appendChild(cannelloniText);
    pastaGrid.appendChild(cannelloni);

// 7. Gnocchi al Pesto
    let gnocchiPesto = document.createElement("div");
    gnocchiPesto.classList.add("pasta-container");
    let gnocchiImg = document.createElement("img");
    gnocchiImg.classList.add("pasta-img");
    gnocchiImg.src = gnocchiPestoImage;
    let gnocchiText = document.createElement("p");
    gnocchiText.classList.add("pasta-name");
    gnocchiText.textContent = "Gnocchi al Pesto";
    gnocchiPesto.appendChild(gnocchiImg);
    gnocchiPesto.appendChild(gnocchiText);
    pastaGrid.appendChild(gnocchiPesto);

    let cocktailText = document.createElement("p");
    cocktailText.id = "cocktail-text";
    cocktailText.textContent = "Cocktails";
    let cocktailSection = document.createElement("div");
    cocktailSection.classList.add("menu-section");
    menuContainer.appendChild(cocktailSection);
    cocktailSection.appendChild(cocktailText);
    let cocktailGrid = document.createElement("div")
    cocktailGrid.classList.add("menu-grid")
    cocktailSection.appendChild(cocktailGrid)


    // 1. Negroni
    let negroni = document.createElement("div");
    negroni.classList.add("cocktail-container");
    let negroniImg = document.createElement("img");
    negroniImg.classList.add("cocktail-img");
    negroniImg.src = negroniImage;
    let negroniText = document.createElement("p");
    negroniText.classList.add("cocktail-name");
    negroniText.textContent = "Negroni";
    negroni.appendChild(negroniImg);
    negroni.appendChild(negroniText);
    cocktailGrid.appendChild(negroni);

// 2. Limoncello Martini
    let limoncelloMartini = document.createElement("div");
    limoncelloMartini.classList.add("cocktail-container");
    let limoncelloImg = document.createElement("img");
    limoncelloImg.classList.add("cocktail-img");
    limoncelloImg.src = limoncelloMartiniImage;
    let limoncelloText = document.createElement("p");
    limoncelloText.classList.add("cocktail-name");
    limoncelloText.textContent = "Limoncello Martini";
    limoncelloMartini.appendChild(limoncelloImg);
    limoncelloMartini.appendChild(limoncelloText);
    cocktailGrid.appendChild(limoncelloMartini);

// 3. Aperol Spritz
    let aperolSpritz = document.createElement("div");
    aperolSpritz.classList.add("cocktail-container");
    let aperolImg = document.createElement("img");
    aperolImg.classList.add("cocktail-img");
    aperolImg.src = aperolSpritzImage;
    let aperolText = document.createElement("p");
    aperolText.classList.add("cocktail-name");
    aperolText.textContent = "Aperol Spritz";
    aperolSpritz.appendChild(aperolImg);
    aperolSpritz.appendChild(aperolText);
    cocktailGrid.appendChild(aperolSpritz);

// 4. Espresso Martini
    let espressoMartini = document.createElement("div");
    espressoMartini.classList.add("cocktail-container");
    let espressoImg = document.createElement("img");
    espressoImg.classList.add("cocktail-img");
    espressoImg.src = espressoMartiniImage;
    let espressoText = document.createElement("p");
    espressoText.classList.add("cocktail-name");
    espressoText.textContent = "Espresso Martini";
    espressoMartini.appendChild(espressoImg);
    espressoMartini.appendChild(espressoText);
    cocktailGrid.appendChild(espressoMartini);

    let footer = document.createElement("footer");
    footer.textContent = "Copyright © Alejandrini";
    content.appendChild(footer)
}