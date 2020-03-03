import { Api } from "./modules/data/api/api.mjs";
import { BookRepository } from "./modules/data/repo/book-repository.mjs";

const query = "boek";
const bookRepository = new BookRepository();
let currentPage = 1;

document.getElementById("search").onclick = () => {
  printBooks();
};

function printBooks() {
  bookRepository.getBooks(query, currentPage).then(res => {
    let books = res.results;
    currentPage = parseInt(res.meta["current-page"]) + 1;
    let frablList = books.map(book => {
      return book.frabl.value;
    });
    console.log(books);
    // bookRepository.getBookDetails(frablList[18])
    //     .then(results => {
    //         console.log(results)
    //     })
  });
}
