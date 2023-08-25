const indonesiaCurrency = new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2
})

//Book final price using function
function bookFinalPrice (bookPrice, bookDiscount, bookTax) {
    const priceAfterDiscount = bookPrice - bookPrice*bookDiscount/100
    const amountOfDiscount = bookPrice*bookDiscount/100
    const priceAfterTax = bookPrice + bookPrice*bookTax/100
    const amountOfTax = bookPrice*bookTax/100
    bookPrice = bookPrice - amountOfDiscount + amountOfTax
    const bookTrueFalse = bookPrice < 100_000
    let bookStatus
    if (bookTrueFalse) {
        bookStatus = "CHEAP"
    } else {
        bookStatus = "EXPENSIVE"
    }

    console.log("Amount of discount = " + indonesiaCurrency.format(amountOfDiscount))
    console.log("Price after discount = " + indonesiaCurrency.format(priceAfterDiscount))
    console.log("Amount of tax = " + indonesiaCurrency.format(amountOfTax))
    console.log("Price after tax = " + indonesiaCurrency.format(priceAfterTax))
    console.log("Grand total is = " + indonesiaCurrency.format(bookPrice))
    console.log("The book is " + bookStatus);
    return "The amount of discount is " + indonesiaCurrency.format(amountOfDiscount) + "<br> The price aftet discount is " + indonesiaCurrency.format(priceAfterDiscount) + "<br> The amount of tax is " + amountOfTax + "<br> The book price aftet tax is " + indonesiaCurrency.format(priceAfterTax) + "<br> The grand total is " + indonesiaCurrency.format(bookPrice)
}
document.getElementById("book").innerHTML = bookFinalPrice(100_000, 20, 11)

//Book final price using class and constructor
const gameOfThronesBook = {
    bookName: 'Game of Thrones',
    bookAuthor: 'George R.R Martin',
    bookPrice: 200_000
}
const bookDetails = {
    bookName: '',
    bookAuthor: '',
    bookPrice: 0
}

let percentageDiscount
let percentageTax
let priceAfterDiscount
let priceAfterTax
let grandPrice
const result = ''

class BookPurchasing {
    constructor(bookDetails, percentageDiscount, percentageTax ) {
        if (!bookDetails) {
            this.result = "Mohon masukkan detail buku"
        }
        else if (JSON.stringify(Object.keys(bookDetails)) !== JSON.stringify(Object.keys(gameOfThronesBook))) {
            this.result = "Detail buku yang diberikan tidak sesuai dengan detail buku pada object parameter"
        } else if (typeof(percentageDiscount) !== 'number') {
            this.result = "Berikan discount berupa angka"
        } else if (typeof(percentageTax) !== 'number') {
            this.result = "Berikan tax berupa angka"
        }
        else {
            let bookPrice = bookDetails.bookPrice
            this.bookDetails = bookDetails
            this.percentageDiscount = percentageDiscount
            this.percentageTax = percentageTax
            this.priceAfterDiscount = bookPrice - bookPrice * percentageDiscount / 100
            this.priceAfterTax = this.priceAfterDiscount + this.priceAfterDiscount * percentageTax / 100
    
            this.grandPrice = this.priceAfterTax
            this.result = this.bookDetails.bookName + ' grand price is ' + indonesiaCurrency.format(this.grandPrice) +  ' with ' + this.percentageDiscount + '% Discount and ' + this.percentageTax + '% Tax'
        }
    }
}

const gameOfThronesBookPrice = new BookPurchasing(gameOfThronesBook, 20, 11)

console.log(gameOfThronesBookPrice)