
const models = [
    "iPhone 13", "iPhone 13 Pro", "iPhone 14", "iPhone 14 Pro",
    "iPhone 15", "iPhone 15 Pro", "iPhone 16", "iPhone 16 Pro"
];
const colors = ["noir", "blanc", "rose", "bleu"];
const productGrid = document.getElementById("product-grid");

colors.forEach(color => {
    const div = document.createElement("div");
    div.className = "product";
    const selectId = "model-select-" + color;
    const modelOptions = models.map(model => `<option value="${model}">${model}</option>`).join("");
    div.innerHTML = `
        <img src="images/${color}.jpg" alt="Coque ${color}" />
        <h3>Coque ${color.charAt(0).toUpperCase() + color.slice(1)}</h3>
        <p>Prix : 7€</p>
        <label for="${selectId}">Modèle :</label>
        <select id="${selectId}">
            ${modelOptions}
        </select>
        <button onclick="acheter('${color}', '${selectId}')">Acheter</button>
    `;
    productGrid.appendChild(div);
});

function acheter(color, selectId) {
    const model = document.getElementById(selectId).value;
    alert(`Commande : coque ${color} pour ${model}. Paiement non encore intégré.`);
}
