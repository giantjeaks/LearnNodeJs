//Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLevel, stock, rating} = product
// console.log(productLevel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock=0 } = {} ) => {
    console.log(type, label, stock)
}

transaction('order', product)
// transaction('order')