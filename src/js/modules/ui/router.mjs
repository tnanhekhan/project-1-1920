import "../../libs/routie.js"
import {BookRepository} from "../data/repo/book-repository.mjs";
import {Template} from "./template.mjs";

// dependencies
const bookRepository = new BookRepository();
const template = new Template();

// pagination counter
let currentPage = 1;

// listeners
document.getElementById("search").onclick = () => {
    fetchBooks();
};

document.getElementById("book-detail-back-button").onclick = () => {
    routie("");
};

routie({
    "book/:id": id => {
        fetchBookDetails(id);
        document.querySelector(".main-section").style.display = "none";
    },
    "": () => {
        currentPage = 1;
        fetchBooks();
        document.querySelector(".detail-section").style.display = "none";
    }
});

function fetchBooks() {
    bookRepository.getBooks("dieren", currentPage).then(res => {
        currentPage = parseInt(res.meta["current-page"]) + 1;
        template.renderBooks(res.results);
    });
}

function fetchBookDetails(id) {
    bookRepository.getBookDetails(id)
        .then(res => {
            template.renderDetail(res.record);
        });
}