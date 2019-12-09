async function getData() {
    const html = document.getElementsByClassName('css-pz80c5')[2].innerHTML.toLowerCase().trim().split('<br><br>');

    let ingredients;
    if (html[0][0] === '-') {
        ingredients = html[1];
    } else {
        ingredients = html[0];
    }

    const chars = ['.', '*', '<'];
    ingredients = ingredients.split(', ').map(ingredient => {
        for (let i = 0; i < ingredient.length; i++) {
            if (chars.includes(ingredient[i])) {
                ingredient = ingredient.slice(0, i);
            }
        }
        return ingredient.trim();
    });

    const brand = document.querySelector('span.css-euydo4').innerText;

    const product = document.querySelector('span.css-0').innerText;

    console.log('ingredients: ', ingredients)

    try {
        const data = await fetchData('https://skinrx-server.herokuapp.com/api/ingredients', { ingredients });
        console.log(data);
        let obj = {};
        obj.data = data;
        obj.brand = brand;
        obj.product = product;
        chrome.runtime.sendMessage(obj);
    } catch (error) {
        console.error(error);
    }

    async function fetchData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return await response.json();
    }
}

getData();

// const xhr = new XMLHttpRequest();

// xhr.open('POST', 'https://skinrx-server.herokuapp.com/api/ingredients');

// xhr.setRequestHeader('Content-Type', 'application/json');

// xhr.send(JSON.stringify({ingredients}));

// xhr.onload = () => {
//     let data = JSON.parse(xhr.response);

//     if (data) {
//         const paragraphs = document.getElementsByTagName('p');
//         for (elt of paragraphs) {
//             elt.style['font-family'] = 'Avenir';
//             elt.style['background-color'] = '#FF00FF';
//             elt.style['font-size'] = '20pt';
//         }
//         console.log(data)
//     }

//     chrome.runtime.sendMessage({data});
// }
