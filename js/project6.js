const elements = [
    // Period 1
    { name: "Hydrogen", symbol: "H", atomicNumber: 1, group: "Nonmetal", gridStart: 1 },
    { name: "Helium", symbol: "He", atomicNumber: 2, group: "Noble Gas", gridStart: 18 },

    // Period 2
    { name: "Lithium", symbol: "Li", atomicNumber: 3, group: "Alkali Metal", gridStart: 1 },
    { name: "Beryllium", symbol: "Be", atomicNumber: 4, group: "Alkaline Earth Metal", gridStart: 2 },
    { name: "Boron", symbol: "B", atomicNumber: 5, group: "Metalloid", gridStart: 13 },
    { name: "Carbon", symbol: "C", atomicNumber: 6, group: "Nonmetal", gridStart: 14 },
    { name: "Nitrogen", symbol: "N", atomicNumber: 7, group: "Nonmetal", gridStart: 15 },
    { name: "Oxygen", symbol: "O", atomicNumber: 8, group: "Nonmetal", gridStart: 16 },
    { name: "Fluorine", symbol: "F", atomicNumber: 9, group: "Halogen", gridStart: 17 },
    { name: "Neon", symbol: "Ne", atomicNumber: 10, group: "Noble Gas", gridStart: 18 },

    // Period 3
    { name: "Sodium", symbol: "Na", atomicNumber: 11, group: "Alkali Metal", gridStart: 1 },
    { name: "Magnesium", symbol: "Mg", atomicNumber: 12, group: "Alkaline Earth Metal", gridStart: 2 },
    { name: "Aluminum", symbol: "Al", atomicNumber: 13, group: "Post-Transition Metal", gridStart: 13 },
    { name: "Silicon", symbol: "Si", atomicNumber: 14, group: "Metalloid", gridStart: 14 },
    { name: "Phosphorus", symbol: "P", atomicNumber: 15, group: "Nonmetal", gridStart: 15 },
    { name: "Sulfur", symbol: "S", atomicNumber: 16, group: "Nonmetal", gridStart: 16 },
    { name: "Chlorine", symbol: "Cl", atomicNumber: 17, group: "Halogen", gridStart: 17 },
    { name: "Argon", symbol: "Ar", atomicNumber: 18, group: "Noble Gas", gridStart: 18 },

    // Period 4
    { name: "Potassium", symbol: "K", atomicNumber: 19, group: "Alkali Metal", gridStart: 1 },
    { name: "Calcium", symbol: "Ca", atomicNumber: 20, group: "Alkaline Earth Metal", gridStart: 2 },
    { name: "Scandium", symbol: "Sc", atomicNumber: 21, group: "Transition Metal", gridStart: 3 },
    { name: "Titanium", symbol: "Ti", atomicNumber: 22, group: "Transition Metal", gridStart: 4 },
    { name: "Vanadium", symbol: "V", atomicNumber: 23, group: "Transition Metal", gridStart: 5 },
    { name: "Chromium", symbol: "Cr", atomicNumber: 24, group: "Transition Metal", gridStart: 6 },
    { name: "Manganese", symbol: "Mn", atomicNumber: 25, group: "Transition Metal", gridStart: 7 },
    { name: "Iron", symbol: "Fe", atomicNumber: 26, group: "Transition Metal", gridStart: 8 },
    { name: "Cobalt", symbol: "Co", atomicNumber: 27, group: "Transition Metal", gridStart: 9 },
    { name: "Nickel", symbol: "Ni", atomicNumber: 28, group: "Transition Metal", gridStart: 10 },
    { name: "Copper", symbol: "Cu", atomicNumber: 29, group: "Transition Metal", gridStart: 11 },
    { name: "Zinc", symbol: "Zn", atomicNumber: 30, group: "Transition Metal", gridStart: 12 },
    { name: "Gallium", symbol: "Ga", atomicNumber: 31, group: "Post-Transition Metal", gridStart: 13 },
    { name: "Germanium", symbol: "Ge", atomicNumber: 32, group: "Metalloid", gridStart: 14 },
    { name: "Arsenic", symbol: "As", atomicNumber: 33, group: "Metalloid", gridStart: 15 },
    { name: "Selenium", symbol: "Se", atomicNumber: 34, group: "Nonmetal", gridStart: 16 },
    { name: "Bromine", symbol: "Br", atomicNumber: 35, group: "Halogen", gridStart: 17 },
    { name: "Krypton", symbol: "Kr", atomicNumber: 36, group: "Noble Gas", gridStart: 18 },

    // Period 5
    { name: "Rubidium", symbol: "Rb", atomicNumber: 37, group: "Alkali Metal", gridStart: 1 },
    { name: "Strontium", symbol: "Sr", atomicNumber: 38, group: "Alkaline Earth Metal", gridStart: 2 },
    { name: "Yttrium", symbol: "Y", atomicNumber: 39, group: "Transition Metal", gridStart: 3 },
    { name: "Zirconium", symbol: "Zr", atomicNumber: 40, group: "Transition Metal", gridStart: 4 },
    { name: "Niobium", symbol: "Nb", atomicNumber: 41, group: "Transition Metal", gridStart: 5 },
    { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, group: "Transition Metal", gridStart: 6 },
    { name: "Technetium", symbol: "Tc", atomicNumber: 43, group: "Transition Metal", gridStart: 7 },
    { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, group: "Transition Metal", gridStart: 8 },
    { name: "Rhodium", symbol: "Rh", atomicNumber: 45, group: "Transition Metal", gridStart: 9 },
    { name: "Palladium", symbol: "Pd", atomicNumber: 46, group: "Transition Metal", gridStart: 10 },
    { name: "Silver", symbol: "Ag", atomicNumber: 47, group: "Transition Metal", gridStart: 11 },
    { name: "Cadmium", symbol: "Cd", atomicNumber: 48, group: "Transition Metal", gridStart: 12 },
    { name: "Indium", symbol: "In", atomicNumber: 49, group: "Post-Transition Metal", gridStart: 13 },
    { name: "Tin", symbol: "Sn", atomicNumber: 50, group: "Post-Transition Metal", gridStart: 14 },
    { name: "Antimony", symbol: "Sb", atomicNumber: 51, group: "Metalloid", gridStart: 15 },
    { name: "Tellurium", symbol: "Te", atomicNumber: 52, group: "Metalloid", gridStart: 16 },
    { name: "Iodine", symbol: "I", atomicNumber: 53, group: "Halogen", gridStart: 17 },
    { name: "Xenon", symbol: "Xe", atomicNumber: 54, group: "Noble Gas", gridStart: 18 },

    // Period 6
    { name: "Cesium", symbol: "Cs", atomicNumber: 55, group: "Alkali Metal", gridStart: 1 },
    { name: "Barium", symbol: "Ba", atomicNumber: 56, group: "Alkaline Earth Metal", gridStart: 2 },
    { name: "Lanthanum", symbol: "La", atomicNumber: 57, group: "Lanthanide", gridStart: 3 },
    { name: "Cerium", symbol: "Ce", atomicNumber: 58, group: "Lanthanide", gridStart: 3 },
    { name: "Praseodymium", symbol: "Pr", atomicNumber: 59, group: "Lanthanide", gridStart: 3 },
    { name: "Neodymium", symbol: "Nd", atomicNumber: 60, group: "Lanthanide", gridStart: 3 },
    { name: "Promethium", symbol: "Pm", atomicNumber: 61, group: "Lanthanide", gridStart: 3 },
    { name: "Samarium", symbol: "Sm", atomicNumber: 62, group: "Lanthanide", gridStart: 3 },
    { name: "Europium", symbol: "Eu", atomicNumber: 63, group: "Lanthanide", gridStart: 3 },
    { name: "Gadolinium", symbol: "Gd", atomicNumber: 64, group: "Lanthanide", gridStart: 3 },
    { name: "Terbium", symbol: "Tb", atomicNumber: 65, group: "Lanthanide", gridStart: 3 },
    { name: "Dysprosium", symbol: "Dy", atomicNumber: 66, group: "Lanthanide", gridStart: 3 },
    { name: "Holmium", symbol: "Ho", atomicNumber: 67, group: "Lanthanide", gridStart: 3 },
    { name: "Erbium", symbol: "Er", atomicNumber: 68, group: "Lanthanide", gridStart: 3 },
    { name: "Thulium", symbol: "Tm", atomicNumber: 69, group: "Lanthanide", gridStart: 3 },
    { name: "Ytterbium", symbol: "Yb", atomicNumber: 70, group: "Lanthanide", gridStart: 3 },
    { name: "Lutetium", symbol: "Lu", atomicNumber: 71, group: "Lanthanide", gridStart: 3 },
    { name: "Hafnium", symbol: "Hf", atomicNumber: 72, group: "Transition Metal", gridStart: 4 },
    { name: "Tantalum", symbol: "Ta", atomicNumber: 73, group: "Transition Metal", gridStart: 5 },
    { name: "Tungsten", symbol: "W", atomicNumber: 74, group: "Transition Metal", gridStart: 6 },
    { name: "Rhenium", symbol: "Re", atomicNumber: 75, group: "Transition Metal", gridStart: 7 },
    { name: "Osmium", symbol: "Os", atomicNumber: 76, group: "Transition Metal", gridStart: 8 },
    { name: "Iridium", symbol: "Ir", atomicNumber: 77, group: "Transition Metal", gridStart: 9 },
    { name: "Platinum", symbol: "Pt", atomicNumber: 78, group: "Transition Metal", gridStart: 10 },
    { name: "Gold", symbol: "Au", atomicNumber: 79, group: "Transition Metal", gridStart: 11 },
    { name: "Mercury", symbol: "Hg", atomicNumber: 80, group: "Transition Metal", gridStart: 12 },
    { name: "Thallium", symbol: "Tl", atomicNumber: 81, group: "Post-Transition Metal", gridStart: 13 },
    { name: "Lead", symbol: "Pb", atomicNumber: 82, group: "Post-Transition Metal", gridStart: 14 },
    { name: "Bismuth", symbol: "Bi", atomicNumber: 83, group: "Post-Transition Metal", gridStart: 15 },
    { name: "Polonium", symbol: "Po", atomicNumber: 84, group: "Metalloid", gridStart: 16 },
    { name: "Astatine", symbol: "At", atomicNumber: 85, group: "Halogen", gridStart: 17 },
    { name: "Radon", symbol: "Rn", atomicNumber: 86, group: "Noble Gas", gridStart: 18 },

    // Period 7
    { name: "Francium", symbol: "Fr", atomicNumber: 87, group: "Alkali Metal", gridStart: 1 },
    { name: "Radium", symbol: "Ra", atomicNumber: 88, group: "Alkaline Earth Metal", gridStart: 2 },
    { name: "Actinium", symbol: "Ac", atomicNumber: 89, group: "Actinide", gridStart: 3 },
    { name: "Thorium", symbol: "Th", atomicNumber: 90, group: "Actinide", gridStart: 3 },
    { name: "Protactinium", symbol: "Pa", atomicNumber: 91, group: "Actinide", gridStart: 3 },
    { name: "Uranium", symbol: "U", atomicNumber: 92, group: "Actinide", gridStart: 3 },
    { name: "Neptunium", symbol: "Np", atomicNumber: 93, group: "Actinide", gridStart: 3 },
    { name: "Plutonium", symbol: "Pu", atomicNumber: 94, group: "Actinide", gridStart: 3 },
    { name: "Americium", symbol: "Am", atomicNumber: 95, group: "Actinide", gridStart: 3 },
    { name: "Curium", symbol: "Cm", atomicNumber: 96, group: "Actinide", gridStart: 3 },
    { name: "Berkelium", symbol: "Bk", atomicNumber: 97, group: "Actinide", gridStart: 3 },
    { name: "Californium", symbol: "Cf", atomicNumber: 98, group: "Actinide", gridStart: 3 },
    { name: "Einsteinium", symbol: "Es", atomicNumber: 99, group: "Actinide", gridStart: 3 },
    { name: "Fermium", symbol: "Fm", atomicNumber: 100, group: "Actinide", gridStart: 3 },
    { name: "Mendelevium", symbol: "Md", atomicNumber: 101, group: "Actinide", gridStart: 3 },
    { name: "Nobelium", symbol: "No", atomicNumber: 102, group: "Actinide", gridStart: 3 },
    { name: "Lawrencium", symbol: "Lr", atomicNumber: 103, group: "Actinide", gridStart: 3 },
    { name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, group: "Transition Metal", gridStart: 4 },
    { name: "Dubnium", symbol: "Db", atomicNumber: 105, group: "Transition Metal", gridStart: 5 },
    { name: "Seaborgium", symbol: "Sg", atomicNumber: 106, group: "Transition Metal", gridStart: 6 },
    { name: "Bohrium", symbol: "Bh", atomicNumber: 107, group: "Transition Metal", gridStart: 7 },
    { name: "Hassium", symbol: "Hs", atomicNumber: 108, group: "Transition Metal", gridStart: 8 },
    { name: "Meitnerium", symbol: "Mt", atomicNumber: 109, group: "Unknown", gridStart: 9 },
    { name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, group: "Unknown", gridStart: 10 },
    { name: "Roentgenium", symbol: "Rg", atomicNumber: 111, group: "Unknown", gridStart: 11 },
    { name: "Copernicium", symbol: "Cn", atomicNumber: 112, group: "Unknown", gridStart: 12 },
    { name: "Nihonium", symbol: "Nh", atomicNumber: 113, group: "Unknown", gridStart: 13 },
    { name: "Flerovium", symbol: "Fl", atomicNumber: 114, group: "Unknown", gridStart: 14 },
    { name: "Moscovium", symbol: "Mc", atomicNumber: 115, group: "Unknown", gridStart: 15 },
    { name: "Livermorium", symbol: "Lv", atomicNumber: 116, group: "Unknown", gridStart: 16 },
    { name: "Tennessine", symbol: "Ts", atomicNumber: 117, group: "Unknown", gridStart: 17 },
    { name: "Oganesson", symbol: "Og", atomicNumber: 118, group: "Unknown", gridStart: 18 },
];

const table = document.getElementById("periodic-table");
const searchBar = document.getElementById("search-bar");
const infoContainer = document.getElementById("info-container");
const elementName = document.getElementById("element-name");
const elementSymbol = document.getElementById("element-symbol");
const atomicNumber = document.getElementById("atomic-number");
const elementGroup = document.getElementById("element-group");

// Separate containers for lanthanides and actinides
const lanthanidesContainer = document.createElement("div");
lanthanidesContainer.classList.add("lanthanides");
const actinidesContainer = document.createElement("div");
actinidesContainer.classList.add("actinides");

document.body.appendChild(lanthanidesContainer);
document.body.appendChild(actinidesContainer);

// Render the periodic table
function createTable() {
    elements.forEach((element) => {
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("element");
        elementDiv.dataset.name = element.name;
        elementDiv.dataset.symbol = element.symbol;
        elementDiv.dataset.atomicNumber = element.atomicNumber;
        elementDiv.dataset.group = element.group;

        // Position the element based on its gridStart
        if (element.group === "Lanthanide") {
            lanthanidesContainer.appendChild(elementDiv);
        } else if (element.group === "Actinide") {
            actinidesContainer.appendChild(elementDiv);
        } else {
            elementDiv.style.gridColumnStart = element.gridStart;
            table.appendChild(elementDiv);
        }

        elementDiv.innerHTML = `
            <strong>${element.symbol}</strong><br>
            <small>${element.atomicNumber}</small>
        `;

        elementDiv.addEventListener("click", () => {
            highlightElement(elementDiv, element);
        });
    });
}

// Highlight selected element and group
function highlightElement(elementDiv, element) {
    document.querySelectorAll(".element").forEach((el) => {
        el.classList.remove("selected", "group-highlight");
    });

    elementDiv.classList.add("selected");

    document.querySelectorAll(`.element[data-group="${element.group}"]`).forEach((el) => {
        el.classList.add("group-highlight");
    });

    elementName.textContent = element.name;
    elementSymbol.textContent = element.symbol;
    atomicNumber.textContent = element.atomicNumber;
    elementGroup.textContent = element.group;
    infoContainer.classList.remove("hidden");
}

// Search functionality
function searchElements() {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll(".element").forEach((elementDiv) => {
        const name = elementDiv.dataset.name.toLowerCase();
        const symbol = elementDiv.dataset.symbol.toLowerCase();
        const atomicNumber = elementDiv.dataset.atomicNumber;

        if (name.includes(query) || symbol.includes(query) || atomicNumber === query) {
            elementDiv.style.display = "block";
        } else {
            elementDiv.style.display = "none";
        }
    });
}

searchBar.addEventListener("input", searchElements);

// Initialize the table
createTable();
