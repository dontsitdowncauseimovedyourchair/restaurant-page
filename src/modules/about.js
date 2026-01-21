import interior_img from "../assets/interior-img.jpeg"
import chef_img from "../assets/chef-mama-mia.jpeg"

export default function aboutUs() {
    let content = document.getElementById("content");

    let aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    aboutContainer.style.display = "flex";
    aboutContainer.style.flexDirection = "column";
    aboutContainer.style.alignItems = "center";
    aboutContainer.style.padding = "40px 20px";

    let title = document.createElement("h1");
    title.textContent = "Nuestra Historia";
    title.style.fontFamily = "'Dancing Script', cursive";
    title.style.fontSize = "4em";
    title.style.marginBottom = "20px";

    aboutContainer.appendChild(title);

    let historySection = document.createElement("div");
    historySection.classList.add("about-section");
    historySection.style.display = "grid";
    historySection.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    historySection.style.gap = "40px";
    historySection.style.maxWidth = "1000px";
    historySection.style.alignItems = "center";
    historySection.style.marginBottom = "60px";

    let historyImg = document.createElement("img");
    historyImg.src = interior_img
    historyImg.alt = "Interior del restaurante en 1904";
    historyImg.style.width = "100%";
    historyImg.style.borderRadius = "8px";
    historyImg.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    let historyText = document.createElement("p");
    historyText.classList.add("history-description");
    historyText.style.textAlign = "justify";
    historyText.innerHTML = `
        Todo comenzó en 1904, cuando la Nonna Maria trajo sus recetas secretas desde la Toscana hasta el corazón de la ciudad. 
        <br><br>
        Lo que empezó como una pequeña panadería familiar llamada "il Pipirin" se ha transformado en <strong>Mama Mía</strong>, 
        un refugio para los amantes de la auténtica cocina italiana. Creemos que la comida no es solo alimento, 
        sino un lenguaje de amor que une a las personas.
    `;

    historySection.appendChild(historyImg);
    historySection.appendChild(historyText);
    aboutContainer.appendChild(historySection);

    let chefSection = document.createElement("div");
    chefSection.classList.add("about-section");
    chefSection.style.display = "grid";
    chefSection.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    chefSection.style.gap = "40px";
    chefSection.style.maxWidth = "1000px";
    chefSection.style.alignItems = "center";

    let chefTextContainer = document.createElement("div");
    let chefTitle = document.createElement("h2");
    chefTitle.textContent = "El Chef Alejandrini";
    chefTitle.style.fontFamily = "'Dancing Script', cursive";
    chefTitle.style.fontSize = "2.5em";
    chefTitle.style.marginBottom = "15px";

    let chefText = document.createElement("p");
    chefText.classList.add("history-description");
    chefText.textContent = "Con más de 20 años de experiencia en las cocinas más prestigiosas de Europa, el Chef Alejandrini lidera nuestra cocina con pasión y precisión. Su filosofía es simple: ingredientes frescos, técnica impecable y un toque de creatividad moderna sin perder la esencia tradicional.";

    chefTextContainer.appendChild(chefTitle);
    chefTextContainer.appendChild(chefText);

    let chefImgElement = document.createElement("img");
    chefImgElement.src = chef_img
    chefImgElement.alt = "Chef Alejandrini cocinando";
    chefImgElement.style.width = "100%";
    chefImgElement.style.borderRadius = "8px";
    chefImgElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    chefSection.appendChild(chefTextContainer);
    chefSection.appendChild(chefImgElement);
    aboutContainer.appendChild(chefSection);

    content.appendChild(aboutContainer);

    let footer = document.createElement("footer");
    footer.textContent = "Copyright © Alejandrini";

    content.appendChild(footer)
}