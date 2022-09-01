
const $getProducts = document.querySelector("#getProducts");
const main = document.querySelector('.main');
let products = [];
async function getProducts () {
    const res = await fetch("./products.json");

    return await res.json();

}

async function showProducts(e) {
    e.target.setAttribute("disabled", true);
    e.target.innerText = "Loading...";

    try {
        e.target.setAttribute("disabled", true);

        products = await getProducts();
   
    } catch (error) {
        console.log("Error", error);
    } finally {
        e.target.removeAttribute("disabled");
        e.target.innerText = "Get products";
        products.map((el) => {
            const productCard = document.createElement('div');
            main.appendChild(productCard);
            productCard.classList.add('productCard');

            let image = document.createElement('img');
            image.classList.add('image');
            productCard.appendChild(image);
            image.setAttribute('src',el.src);
            let productName = document.createElement('div');
            productCard.appendChild(productName);
            productName.innerText = el.name;
            let price = document.createElement('div');
            productCard.appendChild(price);
            price.innerText = el.price;
            //console.log(el)
            // div.innerHTML = el.name;
            // image.setAttribute('src',el.src)
            // main.appendChild(div);
            // productCard.appendChild(image);
        });
    }
}

$getProducts.addEventListener("click", showProducts);
