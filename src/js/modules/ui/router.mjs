import "../../libs/routie.js"
import {BookRepository} from "../data/repo/book-repository.mjs";
import {Template} from "./template.mjs";

let currentPage = 1;
let bookRepository = new BookRepository();

printBooks();

routie({
    "book/:id": id => {
        document.querySelector(".main-section").style.display = "none";
    }
});

document.getElementById("search").onclick = () => {
    printBooks();
};

function printBooks() {
    let bookRepository = new BookRepository();
    let template = new Template();
    bookRepository.getBooks("dieren", currentPage).then(res => {
        let books = res.results;
        currentPage = parseInt(res.meta["current-page"]) + 1;
        template.renderBooks(books);
    });
}