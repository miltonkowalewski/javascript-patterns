const iof = 3.14

function Product ({ name, price }) {
    this.name = name
    this.price = price
}

function Cart() {

    const products = []

    return {
        addProduct(product) {
            products.push(new Product(product))
        },
        length() {
            return products.length
        },
        listProducts() {
            return products.map(
                product => {
                    return `${product.name} - ${product.price}`
                }
            ).join('\n')
        }
    }
}

const miltonCart = new Cart()
const rafaelCart = new Cart()

miltonCart.addProduct({
    name: "batata", 
    price: 1.99
})
miltonCart.addProduct({
    name: "cenoura", 
    price: 3.50
})

rafaelCart.addProduct({
    name: "alcatra", 
    price: 26.00
})

console.log(`Milton's cart products:\n${miltonCart.listProducts()}\n`);
console.log(`Milton's cart quantity: ${miltonCart.length()}\n`);

console.log(`Rafael's cart products:\n${rafaelCart.listProducts()}\n`);
console.log(`Rafael's cart quantity: ${rafaelCart.length()}\n`);

