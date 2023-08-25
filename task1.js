const indonesiaCurrency = new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2
})

let start
let end

//Book final price using function
function bookFinalPrice (bookPrice, bookDiscount, bookTax, amountOfStock, amountOfPurchased) {
    const bookNormalPrice = bookPrice
    const priceAfterDiscount = bookPrice - bookPrice*bookDiscount/100
    const amountOfDiscount = bookPrice*bookDiscount/100
    const priceAfterTax = bookPrice + bookPrice*bookTax/100
    const amountOfTax = bookPrice*bookTax/100
    bookPrice = bookPrice - amountOfDiscount + amountOfTax
    const bookTrueFalse = bookPrice < 100_000
    const stock = amountOfStock
    const purchased = amountOfPurchased
    const notesId = Math.floor((Math.random() * 1000)) << 999
    const purchaseNote = {
        notesId: notesId,
        bookNormalPrice: indonesiaCurrency.format(bookNormalPrice),
        amountOfDiscount: indonesiaCurrency.format(amountOfDiscount),
        priceAfterDiscount: indonesiaCurrency.format(priceAfterDiscount),
        amountOfTax: indonesiaCurrency.format(amountOfTax),
        priceAfterTax: indonesiaCurrency.format(priceAfterTax),
        bookFinalPrice: indonesiaCurrency.format(bookPrice),
        stock: stock,
        purchased: purchased,
    }
    let totalPrice
    let bookStatus
    if (bookTrueFalse) {
        bookStatus = "CHEAP"
    } else {
        bookStatus = "EXPENSIVE"
    }
    purchaseNote.bookStatus = bookStatus

    let i = 0
    while (i < purchased) {
        i++
        if(i === stock) {
            totalPrice = i * bookPrice

            purchaseNote.totalPrice = indonesiaCurrency.format(totalPrice)
            purchaseNote.afterPurchasedStock = 0
            if (purchaseNote.purchased > purchaseNote.stock){
                purchaseNote.purchaseRequestLeft = purchaseNote.purchased - purchaseNote.stock
                purchaseNote.purchaseInformation = `Your request more than our warehouse stock, please search for ${purchaseNote.purchaseRequestLeft} book left in other store`
            } else {
                purchaseNote.purchaseRequestLeft = 0
                purchaseNote.purchaseInformation = `Book is out of stock`
            }
            console.log(purchaseNote);
            break
        } else if (i === purchased) {
            totalPrice = i * bookPrice

            purchaseNote.totalPrice = indonesiaCurrency.format(totalPrice)
            purchaseNote.afterPurchasedStock = purchaseNote.stock - purchaseNote.purchased
            purchaseNote.purchaseInformation = `Book is still available to purchase`
            console.log(purchaseNote);
            break
        }
    }

    // for (let i = 0; i <= purchased; i++){
    //     if(i === stock) {
    //         totalPrice = i * bookPrice

    //         purchaseNote.totalPrice = indonesiaCurrency.format(totalPrice)
    //         purchaseNote.afterPurchasedStock = 0
    //         if (purchaseNote.purchased > purchaseNote.stock){
    //             purchaseNote.purchaseRequestLeft = purchaseNote.purchased - purchaseNote.stock
    //             purchaseNote.purchaseInformation = `Your request more than our warehouse stock, please search for ${purchaseNote.purchaseRequestLeft} book left in other store`
    //         } else {
    //             purchaseNote.purchaseRequestLeft = 0
    //             purchaseNote.purchaseInformation = `Book is out of stock`
    //         }
    //         console.log(purchaseNote);
    //         break
    //     } else if (i === purchased) {
    //         totalPrice = i * bookPrice

    //         purchaseNote.totalPrice = indonesiaCurrency.format(totalPrice)
    //         purchaseNote.afterPurchasedStock = purchaseNote.stock - purchaseNote.purchased
    //         purchaseNote.purchaseInformation = `Book is still available to purchase`
    //         console.log(purchaseNote);
    //         break
    //     }
    // }
    return `
        <div class="relative overflow-x-auto">
        <p class="text-center"> Your notes ID: ${purchaseNote.notesId} <p>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-16">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Discount
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Tax
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Final Price
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Stock
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Purchased
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Left over
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Grand Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            Game Of Thrones
                        </th>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.bookNormalPrice}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.amountOfDiscount}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.amountOfTax}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.bookFinalPrice}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.stock}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.purchased}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.afterPurchasedStock}
                        </td>
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.totalPrice}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="text-center">${purchaseNote.purchaseInformation}</p>
        </div>
    `
}
document.getElementById("book").innerHTML = bookFinalPrice(100_000, 20, 11, 100, 110)

start = performance.now()
bookFinalPrice(200_000, 10, 11, 50, 4)
end = performance.now()
console.log(end + "-" + start);
console.log(`Execution Time is: ${end - start}`);