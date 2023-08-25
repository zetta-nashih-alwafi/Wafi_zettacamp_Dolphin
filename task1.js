const indonesiaCurrency = new Intl.NumberFormat( "id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2
});

function print(log) {
    console.log(log);
}

//Task 1 variables
let favoriteBook = 'Nebula'
let quiteFavoriteBook = 'Nebula'
let notQuiteFavoriteBook = 'nebula'
const bookAuthor = 'John'

//New favorite book variables
let recommendationBook = 'Buku Matematika SMP'

//Create 2 variables contain price of your favorite book
let favoriteBookPrice = 100_000
let recommendationBookPrice = 100_000

//Use compatration to display true if the name of books have same name otherwise display false
const compareVariableNonStrictFalse = favoriteBook == notQuiteFavoriteBook
const compareVariableNonStrictTrue = favoriteBook == quiteFavoriteBook
const compareVariableTrue = favoriteBook === quiteFavoriteBook
const compareVariableFalse = favoriteBook === notQuiteFavoriteBook


//Compare two book price and determine the one with the highest price
const highestPrice = favoriteBookPrice > recommendationBookPrice ? favoriteBook + ' adalah buku dengan harga tertinggi yaitu ' + indonesiaCurrency.format(favoriteBookPrice) : favoriteBookPrice < recommendationBookPrice ? recommendationBook + ' adalah buku dengan harga tertinggi yaitu ' + indonesiaCurrency.format(recommendationBookPrice) : 'Harga kedua buku adalah sama'

//Find the average price between two variables using arithmetic operation
const avgBookPrice = (favoriteBookPrice + recommendationBookPrice) /2

//Create new variable and try using ternary operator to determine the value
const bookPriceStatus = avgBookPrice > 500_000 ? 'Expensive' : 'Cheap'

//Create an object to hold some value
const myProfile = {
    name: 'Muhammad Nashih Al Wafi',
    age: 19,
    address: 'Sleman, Daerah Istimewa Yogyakarta',
    major: 'Informatic and Communication Science',
    institution: 'Yogyakarta Islamic State University Sunan kalijaga and Yogyakarta State University'
}

print(compareVariableNonStrictTrue)
print(compareVariableNonStrictFalse)
print(compareVariableTrue)
print(compareVariableFalse)
print(highestPrice)
print(indonesiaCurrency.format(avgBookPrice))
print(bookPriceStatus)

//Print object value 
print('My name is ' + myProfile.name + ', i am ' + myProfile.age + ' years old. I live with my parents in ' + myProfile.address + '. I am a double-degree student at ' + myProfile.institution + ' in ' + myProfile.major + ' major.')

//Asign new key into object
myProfile.program = 'Zettacemp'
print(myProfile)

//Create an array to receive an object
const arrayMyProfile = new Array

//Push an object value to an array
arrayMyProfile.push(myProfile.name, myProfile.age, myProfile.address, myProfile.major)
print(arrayMyProfile)

arrayMyProfile.splice(3, 1)
print(arrayMyProfile)

const trySlice = arrayMyProfile.slice(0, 2)
print(trySlice)

arrayMyProfile.push(myProfile.age)

const setMyProfile = new Set(arrayMyProfile)
print(setMyProfile)

print(setMyProfile.has(19))

setMyProfile.delete(19)
print(setMyProfile)

setMyProfile.add(myProfile.institution)
print(setMyProfile)

//Convert object into Map
const whatIsYour = new Map(Object.entries(myProfile))
print(whatIsYour)

print(whatIsYour.get('name'))
whatIsYour.set('hobby', 'anything')
print(whatIsYour)

whatIsYour.clear()
print(whatIsYour)

//
const myAssetsMap = new Map
const myAssetsObject = new Object
const arrayMyAssets = ['nationality', 'house', 'car', 'motor']

for (let i = 0; i < arrayMyAssets.length; i++) {
    myAssetsMap.set(arrayMyAssets[i], i+1)
}
print(myAssetsMap)

for (let i = 0; i < arrayMyAssets.length; i++) {
    myAssetsObject [arrayMyAssets[i]] = i+1
}
print(myAssetsObject)

const bookPrice = {
    price: favoriteBookPrice,
    set discountPrice(discount) {
        discount ? this.price = this.price - this.price * discount/100 : this.price = this.price
    }
}
bookPrice.discountPrice = 25
print(bookPrice.price)

//Mathematic Example
print("Log arithmatic example, log(10) is " + Math.log10(10))
print("Root arithmatic example, √144 is " + Math.sqrt(144))
print("Square arithmatic example, square of 8 is " + Math.pow(8, 2)) //This is ** in traditional javasctipt aritmathic
print("Trigonometric question example, Bill is 30 m away from a church. The angle of elevation when he looks at the top of the church’s spire is 45°. If Bill’s eye level is 1.5 m above the ground, how tall is the church spire?")

//The answer
const billToChruchDistance = 30
const billElevation = 45
const billEyeLevel = 1.5
let churchHeight

churchHeight = Math.floor(Math.tan(billElevation)) * billToChruchDistance + billEyeLevel

print("The chruch height is " + churchHeight)

print("Another question example, The radius of a circle is 4 cm, what is the area?")
const circleRadius = 4
let circleArea

circleArea = Math.pow(circleRadius, 2) * Math.PI
print("The area of the circle is " + circleArea)

print("Another advanced arithmatic question, Solve the t for 10^t+1 = e Give your answer")
let t = Math.log10(Math.E -1)

print("The t is equal to " + t)