import "../../libs/routie.js"
import { BookRepository } from "../data/repo/book-repository.mjs";
import { TopicRepository } from "../data/repo/topic-repository.mjs";
import { Template } from "./template.mjs";
import * as ChangeUi from "../ui/change-ui.mjs";

// dependencies
const bookRepository = new BookRepository();
const topicRepository = new TopicRepository();
const template = new Template();

// pagination counter
let currentPage = 1;
let nextPage = 0;

// modal answers
let userGroup = 0;
let knowsTopic = false;
let currentTopic = null;

// search elements
const mainSearchInput = document.getElementById("main-search-input");
const modalSearchInput = document.getElementById("modal-search-input");

// click listeners
document.getElementById("main-search-button").onclick = () => {
    if (mainSearchInput && mainSearchInput.value) {
        routie(`topic/${mainSearchInput.value}`);
    } else {
        alert("Je hebt geen onderwerp ingevuld!")
    }
};

modalSearchInput.addEventListener("keydown", event => {
    if (event.key === 'Enter' && mainSearchInput.value && mainSearchInput.value.length) {
        routie(`topic/${mainSearchInput.value}`);
    }
});

mainSearchInput.addEventListener("keydown", event => {
    if (event.key === 'Enter' && mainSearchInput.value && mainSearchInput.value.length) {
        routie(`topic/${mainSearchInput.value}`);
    }
});

document.getElementById("modal-search-button").onclick = () => {
    if (modalSearchInput && modalSearchInput.value) {
        routie(`topic/${modalSearchInput.value}`);
    } else {
        alert("Je hebt geen onderwerp ingevuld!")
    }
};

document.getElementById("book-detail-back-button").onclick = () => {
    routie(`topic/${currentTopic}`);
};

document.getElementById("yes-button").onclick = () => {
    routie(`group/${userGroup}/yes`);
};

document.getElementById("no-button").onclick = () => {
    routie(`group/${userGroup}/no`);
};

document.getElementById("home-button").onclick = () => {
    routie("");
};

document.getElementById("more-books-button").onclick = () => {
    document.querySelector(".loader-message").innerText = "Wij zoeken nu naar méér boeken!";
    currentPage = nextPage;
    ChangeUi.showLoader();
    fetchBooks(currentTopic, currentPage);
};

routie({
    "topic/:topic/:page/*/:id": (topic, page, _, id) => {
        document.querySelector(".loader-message").innerText = "Wij zoeken nu naar jouw boek!";
        currentTopic = topic;
        currentPage = page;
        ChangeUi.showLoader();
        ChangeUi.hideModal();
        fetchBookDetails(id);
    },
    "topic/:topic": topic => {
        currentTopic = topic;
        document.querySelector(".loader-message").innerText = "Wij zoeken nu naar jouw boeken!";
        ChangeUi.hideModal();
        ChangeUi.showLoader();
        fetchBooks(topic, currentPage);
    },
    "": () => {
        currentPage = 1;
        nextPage = 0;
        ChangeUi.hideLoader();
        setupModal();
    },
    "group/:group/:answer": (group, answer) => {
        knowsTopic = answer === "yes";
        ChangeUi.replaceTopicQuestionByMainTopics();

        if (knowsTopic) {
            ChangeUi.showKnownSubjectElement()
        } else {
            ChangeUi.showNoKnownSubjectElement()
        }
    },
    "group/:group": group => {
        userGroup = group;
        setTopics()
        ChangeUi.replaceGroupByTopicQuestion()
    }
});

function setupModal() {
    template.renderGroups(topicRepository.getGroups());

    ChangeUi.hideAllSections();
    ChangeUi.showModal();
}

function setTopics() {
    if (userGroup >= 6) {
        template.renderTopics(topicRepository.getTopicsYoungAdults());
    } else {
        template.renderTopics(topicRepository.getTopicsYouth());
    }
}


function fetchBooks(topic, page) {
    ChangeUi.hideAllSections();
    ChangeUi.hideMoreBooksButton();
    ChangeUi.showTopSection();

    if (userGroup >= 6) {
        bookRepository.getBooks(topic, page).then(res => {
            nextPage = parseInt(res.meta["current-page"]) + 1;
            template.renderBooks(res.results, currentPage, currentTopic);
        });
    } else {
        bookRepository.getYouthBooks(topic, page).then(res => {
            nextPage = parseInt(res.meta["current-page"]) + 1;
            template.renderBooks(res.results, currentPage, currentTopic);
        });
    }

    mainSearchInput.value = "";
    modalSearchInput.value = "";
    window.scrollTo(0, 0);
}

function fetchBookDetails(id) {
    bookRepository.getBookDetails(id)
        .then(res => {
            template.renderDetail(res.record);
        });
}