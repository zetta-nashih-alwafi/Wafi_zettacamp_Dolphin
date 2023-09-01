const indonesiaCurrency = new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2
})

let start
let end
const date = new Date(2023, 8, 28)
const current = new Date(2024, 11, 28)

let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

function monthName(month) {
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "There is a bug in your code";
    }
}


//Book final price using function
function bookFinalPrice (bookPrice, bookDiscount, bookTax, amountOfStock, amountOfPurchased, termOfCredit) {
    const bookNormalPrice = bookPrice
    const priceAfterDiscount = bookPrice - bookPrice*bookDiscount/100
    const amountOfDiscount = bookPrice*bookDiscount/100
    const priceAfterTax = bookPrice + bookPrice*bookTax/100
    const amountOfTax = bookPrice*bookTax/100
    bookPrice = bookPrice - amountOfDiscount + amountOfTax
    const bookTrueFalse = bookPrice < 100_000
    const stock = amountOfStock
    const purchased = amountOfPurchased
    const credit = termOfCredit
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
        termOfCredit: credit
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
            break
        } else if (i === purchased) {
            totalPrice = i * bookPrice

            purchaseNote.totalPrice = indonesiaCurrency.format(totalPrice)
            purchaseNote.afterPurchasedStock = purchaseNote.stock - purchaseNote.purchased
            purchaseNote.purchaseInformation = `Book is still available to purchase`
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

    let dueDate = new Array()
    for (i = 1; i <= credit; i++) {
        if (((month + i) % 12 + 1) === 1) {
            year += 1
        }
        if ((month + i) % 12 + 1 === 2 && year % 4 === 0) {
            day = date.getDate()
            if (day % 29 === 0) {
                day
            } else {
                day %=29
            }
            dueDate.push(day + " " + monthName(((month + i) % 12 + 1)) + " " + year)
            continue        
        } 
        if ((month + i) % 12 + 1 === 2 && year % 4 !== 0) {
            day = date.getDate()
            if (day % 28 === 0) {
                day
            } else {
                day %=28
            }
            dueDate.push(day + " " + monthName(((month + i) % 12 + 1)) + " " + year)
            continue
        }
        if (((((month + i) % 12 + 1) % 2 === 1 && ((month + i) % 12 + 1) < 8)) || ((((month + i) % 12 + 1) % 2 === 0 && ((month + i) % 12 + 1) > 7))) {
            day = date.getDate()
            if (day % 31 === 0) {
                day
            } else {
                day %=31
            }
            dueDate.push(day + " " + monthName(((month + i) % 12 + 1)) + " " + year)
            continue
        }
        if (((((month + i) % 12 + 1) % 2 === 0 && ((month + i) % 12 + 1) < 8)) || ((((month + i) % 12 + 1) % 2 === 1 && ((month + i) % 12 + 1) > 7))) {
            day = date.getDate()
            if (day % 30 === 0) {
                day
            } else {
                day %=30
            }
            dueDate.push(day + " " + monthName(((month + i) % 12 + 1)) + " " + year)
            continue
        }
    }
    console.log(dueDate);

    purchaseNote.dueDate = dueDate
    purchaseNote.nextDueDate = monthName((month) % 12 + 1)
    purchaseNote.pricePerMonth = indonesiaCurrency.format(totalPrice / termOfCredit)
    document.getElementById("book").innerHTML = `
        <div class="relative overflow-x-auto">
            <p class="text-center"> Your notes ID: ${purchaseNote.notesId} </p>
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
                        <th scope="col" class="px-6 py-3 text-center">
                            Term of Credit
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
                        <td class="px-6 py-4 text-center">
                            ${purchaseNote.termOfCredit}x
                        </td>
                    </tr>
                </tbody>
            </table>
            <p class="text-center">${purchaseNote.purchaseInformation}</p>
        </div>
        <div class="mt-8 md:mx-16 mx-8">            
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Completed Payment:</h2>
            <ul id="due-date" class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                
            </ul>
        </div>
`

    let dateList = ''

    // console.log(date.getMonth());

    for (let i = 0; i < purchaseNote.dueDate.length; i++) {
        if (i < purchaseNote.dueDate.findIndex(
            (element, index) => {
                if (element.includes(monthName(current.getMonth()+1)) && element.includes(current.getFullYear()) ){
                    return index
                }
            })){
            dateList += 
                `
                <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    ${purchaseNote.dueDate[i]}
                </li>
                `
        } else {
            dateList +=
            `<li class="flex items-center">
                <svg class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                ${purchaseNote.dueDate[i]}
            </li>`
        }
    }
    document.getElementById("due-date").innerHTML = dateList
}

bookFinalPrice(100_000, 20, 11, 100, 10, 12)

start = performance.now()
// bookFinalPrice(200_000, 10, 11, 50, 4)
end = performance.now()
console.log(end + "-" + start);
console.log(`Execution Time is: ${end - start}`);