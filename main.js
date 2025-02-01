
const api = axios.create({
    baseURL: 'https://679e04ed946b0e23c0625fcb.mockapi.io'
});


function generateCard() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const color = document.getElementById('color').value;
    const image = document.getElementById('image').value;

    const cardContainer = document.getElementById('card-container');

    const card = document.createElement('div');
    card.classList.add('card');

    
    const img = document.createElement('img');
    img.src = image;
    card.appendChild(img);

    
    const cardName = document.createElement('h3');
    cardName.textContent = name;
    card.appendChild(cardName);

    
    const cardPrice = document.createElement('p');
    cardPrice.textContent = `Narhi: ${price} so'm`;
    card.appendChild(cardPrice);

    
    const cardColor = document.createElement('p');
    cardColor.textContent = `Rangi: ${color}`;
    card.appendChild(cardColor);

    cardContainer.appendChild(card);

    
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('color').value = '';
    document.getElementById('image').value = '';
}


api.get('/crud')
    .then(response => {
        const products = response.data;
        console.log(products);
        

        
        products.forEach(product => {
            const cardContainer = document.getElementById('card-container');

            const card = document.createElement('div');
            card.classList.add('card');

            
            const img = document.createElement('img');
            img.src = product.image;
            card.appendChild(img);

            
            const cardName = document.createElement('h3');
            cardName.textContent = product.name;
            card.appendChild(cardName);

            
            const cardPrice = document.createElement('p');
            cardPrice.textContent = `Narhi: ${product.price} so'm`;
            card.appendChild(cardPrice);

            
            const cardColor = document.createElement('p');
            cardColor.textContent = `Rangi: ${product.color}`;
            card.appendChild(cardColor);

            cardContainer.appendChild(card);

            const btnBuy = document.createElement('button');
            btnBuy.textContent = 'Buy'
            btnBuy.classList.add('btnBuy')
            btnBuy.addEventListener('click', () => basketProd(product.id));
            card.appendChild(btnBuy);
        });
    })
    .catch(error => {
        console.error('Xatolik:', error);
    });

function basketProd(son){
    let a = localStorage.getItem("prods")
    if(!a){
        localStorage.setItem('prods', JSON.stringify([]))
    }

    let b = JSON.parse(a)
    b.push(son)
    localStorage.setItem("prods", JSON.stringify(b))
    console.log(b);
}