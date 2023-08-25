let bookFavorite = "Nebula";
const bookAuthor = "John";
let bookNumber = 12;
let bookDescription = "is a Tere Liye book";

//Print the current favorite book and the author
console.log(bookFavorite);
console.log(bookAuthor);

//Change and print the new favorite book
bookFavorite = "Matahari";
console.log(bookFavorite);

//Try to change the book author and print the new author
try {
    console.log(bookAuthor);
    bookAuthor = "Tere Liye"; 
} catch (e) {
    console.log(e);
}
console.log(bookAuthor);

//Concat the favorite book and the book description
let book = bookFavorite + bookNumber + " " + bookDescription;
console.log(book);

//Other data type

let otherValue = true;
console.log(typeof(otherValue));

otherValue = 21;
console.log(typeof(otherValue));

otherValue = "is Dynamic";
console.log(typeof(otherValue));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof(array));

const object = {
    bookFavorite: 'Bulan',
    bookAuthor: "Tere Liye",
    myName: "Wafi"
}

console.log(typeof(object));
console.log(object.bookFavorite + " " + object.bookAuthor + " buku favorit " + object.myName);