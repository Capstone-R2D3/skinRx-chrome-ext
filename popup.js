const div = document.createElement('div');
div.setAttribute('id', 'body');
document.body.appendChild(div);

const product = document.createElement('p');
product.textContent = `Product: ${JSON.parse(localStorage.getItem('product'))}`;
div.appendChild(product);

const divTable = document.createElement('div');
divTable.setAttribute('id', 'divTable');
div.appendChild(divTable);

const divTable2 = document.createElement('div');
divTable2.setAttribute('id', 'divTable2');
divTable.appendChild(divTable2);

const table = document.createElement('table');
divTable2.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const header = document.createElement('tr');
thead.appendChild(header);

const nameCol = document.createElement('th');
nameCol.setAttribute('id', 'name');
nameCol.textContent = 'Ingredient';
header.appendChild(nameCol);

const toxicityCol = document.createElement('th');
toxicityCol.setAttribute('id', 'toxicity');
toxicityCol.textContent = 'Toxicity*';
header.appendChild(toxicityCol);

const researchCol = document.createElement('th');
researchCol.setAttribute('id', 'research');
researchCol.textContent = 'Research';
header.appendChild(researchCol);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const data = localStorage.getItem('ingredients');
const ingredients = JSON.parse(data);

ingredients.forEach(ingredient => {
    const row = document.createElement('tr');
    tbody.appendChild(row);

    const name = document.createElement('td');
    name.textContent = ingredient.name[0].toUpperCase().concat(ingredient.name.slice(1));
    row.appendChild(name);

    const toxicity = document.createElement('td');
    toxicity.textContent = ingredient.toxicity;
    row.appendChild(toxicity);

    const research = document.createElement('td');
    research.textContent = ingredient.data;
    row.appendChild(research);
});

const footnote = document.createElement('p');
footnote.setAttribute('id', 'footnote');
footnote.textContent = '*Toxicity levels range on a scale of 1 to 10: 1 to 2 is considered low hazard, 3 to 6 is moderate hazard, and 7 to 10 is high hazard.'
divTable2.appendChild(footnote);
