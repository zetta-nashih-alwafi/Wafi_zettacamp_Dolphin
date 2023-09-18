const indonesiaCurrency = new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2
})

let start
let end
const date = new Date()
const current = new Date(2023, 11, 28)

let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let price, discount, tax, stock, purchase, creditTerm

function monthName(month) {
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "There is a bug in your code";
    }
}

function monthNumber(month) {
    switch (month) {
        case "January":
            return 0;
        case "February":
            return 1;
        case "March":
            return 2;
        case "April":
            return 3;
        case "May":
            return 4;
        case "June":
            return 5;
        case "July":
            return 6;
        case "August":
            return 7;
        case "September":
            return 8;
        case "October":
            return 9;
        case "November":
            return 10;
        case "December":
            return 11;
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
    bookPrice = bookPrice
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

    // let i = 0
    // while (i < purchased) {
    //     i++
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
    //         break
    //     } else if (i === purchased) {
    //         totalPrice = i * bookPrice

    //         purchaseNote.totalPrice = indonesiaCurrency.format(totalPrice)
    //         purchaseNote.afterPurchasedStock = purchaseNote.stock - purchaseNote.purchased
    //         purchaseNote.purchaseInformation = `Book is still available to purchase`
    //         break
    //     }
    // }

    for (let i = 0; i <= purchased; i++){
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

    purchaseNote.pricePerMonth = indonesiaCurrency.format(totalPrice / termOfCredit)

    console.log(purchaseNote);
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
            dueDate.push({'dueDate': day + " " + monthName(((month + i) % 12)) + " " + year,
                            'amount': purchaseNote.pricePerMonth})
            continue        
        } 
        if ((month + i) % 12 + 1 === 2 && year % 4 !== 0) {
            day = date.getDate()
            if (day % 28 === 0) {
                day
            } else {
                day %=28
            }
            dueDate.push({'dueDate': day+27 + " " + monthName(((month + i) % 12)) + " " + year,
                            'amount': purchaseNote.pricePerMonth})
            continue
        }
        if (((((month + i) % 12 + 1) % 2 === 1 && ((month + i) % 12) < 8)) || ((((month + i) % 12 + 1) % 2 === 0 && ((month + i) % 12 + 1) > 7))) {
            day = date.getDate()
            if (day % 31 === 0) {
                day
            } else {
                day %=31
            }
            dueDate.push({'dueDate': day + " " + monthName(((month + i) % 12)) + " " + year,
                            'amount': purchaseNote.pricePerMonth})
            continue
        }
        if (((((month + i) % 12 + 1) % 2 === 0 && ((month + i) % 12) < 8)) || ((((month + i) % 12 + 1) % 2 === 1 && ((month + i) % 12 + 1) > 7))) {
            day = date.getDate()
            if (day % 30 === 0) {
                day
            } else {
                day %=30
            }
            dueDate.push({'dueDate': day + " " + monthName(((month + i) % 12)) + " " + year,
                            'amount': purchaseNote.pricePerMonth})
            continue
        }
    }
    console.log(dueDate);

    purchaseNote.dueDate = dueDate
    purchaseNote.nextDueDate = monthName((month) % 12)
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
            <p id="payment-accumulation" class="mb-2 font-semibold text-gray-500"></p>
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Completed Payment:</h2>
            <ul id="due-date" class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                
            </ul>
        </div>
`

    let dateList = ''
    let lastDue = purchaseNote.dueDate[purchaseNote.dueDate.length-1].dueDate.split(' ')
    let lastDueYear = lastDue[2]
    let lastDueMonth = lastDue[1]
    let lastDueDay = lastDue[0]
    let paymentAccumulation = totalPrice
    let paymentAccumulation2 = totalPrice
    let paymentData = new Array()
    // let thisDue
    // let thisDueDay
    // console.log(lastDueYear);

    if (lastDueYear < current.getFullYear()) {
        for (let i = 0; i < purchaseNote.dueDate.length; i++) {
            paymentAccumulation -= totalPrice / termOfCredit
            paymentData.push({"date": purchaseNote.dueDate[i].dueDate, "debtLeft": paymentAccumulation})
            dateList += 
                `
                <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    ${purchaseNote.dueDate[i].dueDate}
                </li>
                `
        }
    } else if(lastDueYear == current.getFullYear() && monthNumber(lastDueMonth) < current.getMonth()) {
        for (let i = 0; i < purchaseNote.dueDate.length; i++) {
            paymentAccumulation -= totalPrice / termOfCredit
            paymentData.push({"date": purchaseNote.dueDate[i].dueDate, "debtLeft": paymentAccumulation})
            dateList += 
                `
                <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    ${purchaseNote.dueDate[i].dueDate}
                </li>
                `
        }
    } else if(lastDueYear == current.getFullYear() && monthNumber(lastDueMonth) == current.getMonth() && lastDueDay < current.getDate()) {
        for (let i = 0; i < purchaseNote.dueDate.length; i++) {
            paymentAccumulation -= totalPrice / termOfCredit
            paymentData.push({"date": purchaseNote.dueDate[i].dueDate, "debtLeft": paymentAccumulation})
            dateList += 
                `
                <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    ${purchaseNote.dueDate[i].dueDate}
                </li>
                `
        } 
    } else {
        for (let i = 0; i < purchaseNote.dueDate.length; i++) {
            // thisDue = purchaseNote.dueDate[i].split(' ')
            // thisDueDay = thisDue[0]
            if (i < purchaseNote.dueDate.findIndex(
                (element, index) => {
                    if (element.dueDate.includes(monthName(current.getMonth())) && element.dueDate.includes(current.getFullYear()) ){
                        return index
                    }
                })){
                    paymentAccumulation -= totalPrice / termOfCredit
            paymentData.push({"date": purchaseNote.dueDate[i].dueDate, "debtLeft": paymentAccumulation})
                dateList += 
                    `
                    <li class="flex items-center">
                        <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        ${purchaseNote.dueDate[i].dueDate}
                    </li>
                    `
            } else {
                dateList +=
                `<li class="flex items-center">
                    <svg class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    ${purchaseNote.dueDate[i].dueDate}
                </li>`
            }
        }
    }
    paymentData.forEach((_element, _index) => {
        paymentAccumulation2 -= totalPrice/termOfCredit
    })
    console.log(paymentData);
    document.getElementById("payment-accumulation").innerHTML = "Your current debt: " + indonesiaCurrency.format(Math.abs(paymentAccumulation2))
    document.getElementById("due-date").innerHTML = dateList
}

function submit() {
    price = document.getElementById("price")
    discount = document.getElementById("discount")
    tax = document.getElementById("tax")
    stock = document.getElementById("stock")
    purchase = document.getElementById("purchase")
    creditTerm = document.getElementById("credit")
    console.log(price.value);
    bookFinalPrice(price.value, discount.value, tax.value, stock.value, purchase.value, creditTerm.value)
}


bookFinalPrice(price, discount, tax, stock, purchase, creditTerm)

// start = performance.now()
// // bookFinalPrice(200_000, 10, 11, 50, 4)
// end = performance.now()
// console.log(end + "-" + start);
// console.log(`Execution Time is: ${end - start}`);