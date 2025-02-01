const api = axios.create({
    baseURL: 'https://679e04ed946b0e23c0625fcb.mockapi.io'
});

let container = document.querySelector('.container')

function cardShow(products) {
    let a = localStorage.getItem('prods');
    let b = JSON.parse(a)

    products.forEach(p => {
        if (b.includes(p.id)) {
            container.insertAdjacentHTML('beforeend', `
                <div class="card" id="card-${p.id}">
                    <img src="${p.image}" alt="">
                    <h3>${p.name}</h3>
                    <p>${p.price} so'm</p>
                    <p>${p.color}</p>
                    <button onClick="deleteProd(${p.id})">Delete</button>
                </div>
            `);
        }
    });
}

function deleteProd(son){
    
}

api.get('/crud').then(res => cardShow(res.data))

