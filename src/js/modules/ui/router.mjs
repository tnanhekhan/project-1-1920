import "../../libs/routie.js"
import { BookRepository } from "../data/repo/book-repository.mjs";
import * as ChangeUi from "../ui/change-ui.mjs";

let currentPage = 1;
let bookRepository = new BookRepository();

routie({
    "/topic/:topic": () => {
        console.log("topic");
        ChangeUi.hideModal()
    },
    "/*/:answer": () => {
        console.log("answer");
        ChangeUi.replaceTopicQuestionByMainTopics()
    },
    "/:group": () => {
        console.log("group");
        ChangeUi.replaceGroupByTopicQuestion()
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