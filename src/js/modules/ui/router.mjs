import "../../libs/routie.js"
import {BookRepository} from "../data/repo/book-repository.mjs";

let currentPage = 1;
let bookRepository = new BookRepository();


routie({
    "vissen": () => {
        printBooks("vissen");
    },
    "honden": () => {
        printBooks("honden");

    },
    "planten": () => {
        printBooks("planten");

    },
    "reizen": () => {
        printBooks("reizen");

    }
});

function printBooks(query) {
    bookRepository.getBooks(query, currentPage).then(res => {
        let books = res.results;
        currentPage = parseInt(res.meta["current-page"]) + 1;
        let frablList = books.map(book => {
            return book.frabl.value;
        });
        console.log(books);
    });
}