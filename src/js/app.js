import {Api} from "./modules/data/api/api.mjs";
import {BookRepository} from "./modules/data/repo/book-repository.mjs";
import "./libs/transparency.js";

const topics = [
    [
        "Dieren",
        "Honden",
        "Katten",
        "Paarden",
        "Dinosaurussen",
        "Vogels",
        "Huisdieren",
        "Wilde dieren",
        "Dolfijnen",
        "Zindelijkheid",
        "Insecten"
    ],
    ["Seizoenen", "Lente", "Zomer", "Herfst", "Winter", "jaargetijden", "Pasen"],
    [
        "Landen",
        "Nederland",
        "Frankrijk",
        "Amsterdam",
        "Verenigde Staten",
        "Afrika",
        "Suriname",
        "New York (stad)"
    ],
    [
        "Geschiedenis",
        "Middeleeuwen",
        "17e eeuw",
        "19e eeuw",
        "Griekse Oudheid",
        "Toekomst",
        "Egyptische Oudheid",
        "Prehistorie",
        "Jodenvervolging"
    ],
    ["Sport", "Voetbal"],
    ["Mode", "Kleding", "Winkelen"],
    ["Natuur", "Aarde", "Natuurwetenschappen", "Ruimtevaart"],
    ["Reizen"],
    ["Eten"],
    ["Muziek"]
];

let currentPage = 1;

printBooks();
init();

// Get the modal
var modal = document.getElementById("modal");

document.getElementById("search").onclick = () => {
    printBooks();
};

function init() {
  setMainTopics(topics);
}

async function printBooks(topic) {
  var bookRepository = new BookRepository();

  bookRepository.getBooks(topic).then(res => {
    let books = res.results;
    currentPage = parseInt(res.meta["current-page"]) + 1;
    console.log(books);

        setBooks(books);
    });
}

// Listener for clicking a topic button
document.querySelectorAll(".modal-topic").forEach(value => {
  value.addEventListener("click", evt => {
    printBooks(value.innerHTML)
  })
});
function setMainTopics(topics) {
  if (!topics) return;

  let mainTopicsData = topics.map(topic => {
    return {
      topic: topic[0]
    };
  });

  let directives = {
    ["modal-topic"]: {
      text: function () {
        return this.topic;
      }
    }
  };

  Transparency.render(
    document.getElementById("modal-topics-container"),
    mainTopicsData,
    directives,
    null
  );
}

function setBooks(books) {
    if (!books) return;

    let booksData = books.map(book => {
        return {
            title: book.titles[0],
            cover: book.coverimages[book.coverimages.length - 1],
            description: book.authors
        };
    });

    let directives = {
        ["book-cover-image"]: {
            src: function () {
                return this.cover;
            }
        },
        ["book-title"]: {
            text: function () {
                return this.title;
            }
        },
        ["book-description"]: {
            text: function () {
                return this.description;
            }
        }
    };

    Transparency.render(
        document.getElementById("book-results-container"),
        booksData,
        directives,
        null
    );
}
