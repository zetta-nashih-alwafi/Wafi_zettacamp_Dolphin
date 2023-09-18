"use strict";
const firstProduct = {
    name: `Coca Cola`,
    vendor: `Coca Cola Company`,
    quantity: 5,
    inStock: 100,
    price: 5000,
};
const secondProduct = {
    name: `Sari Roti`,
    vendor: `Toko Kue Sebelah`,
    quantity: 2,
    inStock: 0,
    price: 10000,
};
// console.log(combineWords([1, `data`, 3, `result`]));
// console.log(combineWords([`Bejo`, `has`, `4`, `sport`, `car`]));
// console.log(sumValue([1, 2, 3, 4]));
// console.log(sumValue([`the`, `dolphins`, `of`, `zettacamp`]));
// console.log(sumValue([`Bejo`, `has`, 4, `sport`, `car`]));
console.log(simplifiedProduct(firstProduct));
console.log(simplifiedProduct(secondProduct));
function combineWords(words) {
    let sentence = words.join(' ');
    if (!sentence) {
        return 'Array is Empty';
    }
    return sentence;
}
function sumValue(data) {
    let finalValue;
    if (!data.length) {
        return 'Array is Empty';
    }
    else if (data.every((value) => typeof value === 'string')) {
        finalValue = data.join(' ');
        return finalValue;
    }
    else if (data.every((value) => typeof value === 'number')) {
        finalValue = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return finalValue;
    }
    return 'invalid input';
}
function simplifiedProduct(product) {
    const productDetails = {
        name: product.name,
        buyable: false,
    };
    if (product.inStock > product.quantity) {
        let totalPrice = product.quantity * product.price;
        productDetails.totalPrice = totalPrice;
        productDetails.buyable = true;
        if (productDetails.totalPrice > 100000) {
            productDetails.status = 'Get 6% cashback';
            productDetails.cashback = totalPrice * 6 / 100;
        }
    }
    if (typeof product.isHalal === 'boolean') {
        productDetails.isHalal = product.isHalal;
    }
    return productDetails;
}
