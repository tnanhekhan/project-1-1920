// modal elements
const selectGroupElement = document.getElementById("select-group");
const selectTopicElement = document.getElementById("select-topic");
const topicQuestionElement = document.getElementById("topic-question");
const noKnownSubjectElement = document.getElementById("no-known-subject-topics");
const knownSubjectElement = document.getElementById("known-subject-topics");
const modal = document.getElementById("modal");

// book elements
const topSection = document.querySelector(".top-section");
const mainSection = document.querySelector(".main-section");
const detailSection = document.querySelector(".detail-section");
const moreBooksButton = document.getElementById("more-books-button");

// loader
const loader = document.querySelector(".loader-container");


export function replaceGroupByTopicQuestion() {
    selectGroupElement.style.display = "none";
    selectTopicElement.style.display = "none";
    topicQuestionElement.style.display = "block";
}

export function replaceTopicQuestionByMainTopics() {
    selectGroupElement.style.display = "none";
    topicQuestionElement.style.display = "none";
    selectTopicElement.style.display = "block";
}

export function showNoKnownSubjectElement() {
    noKnownSubjectElement.style.display = "block";
    knownSubjectElement.style.display = "none";
    selectTopicElement.style.display = "block";

}

export function showKnownSubjectElement() {
    noKnownSubjectElement.style.display = "none";
    knownSubjectElement.style.display = "block";
    selectTopicElement.style.display = "block";
}

export function hideModal() {
    selectGroupElement.style.display = "none";
    topicQuestionElement.style.display = "none";
    selectTopicElement.style.display = "none";
    modal.style.display = "none";
}

export function showModal() {
    selectGroupElement.style.display = "block";
    modal.style.display = "block";
}

export function hideAllSections() {
    topSection.style.display = "none";
    mainSection.style.display = "none";
    detailSection.style.display = "none";
    moreBooksButton.style.display = "none";
}

export function showAllSections() {
    topSection.style.display = "flex";
    mainSection.style.display = "block";
    detailSection.style.display = "none";
    moreBooksButton.style.display = "block";
}

export function showDetail() {
    topSection.style.display = "none";
    mainSection.style.display = "none";
    detailSection.style.display = "block";
    moreBooksButton.style.display = "none";
}

export function hideDetail() {
    topSection.style.display = "flex";
    mainSection.style.display = "block";
    detailSection.style.display = "none";
    moreBooksButton.style.display = "block";
}

export function hideMoreBooksButton() {
    moreBooksButton.style.display = "none";
}

export function showMoreBooksButton() {
    moreBooksButton.style.display = "block";
}

export function hideTopSection() {
    topSection.style.display = "none";

}

export function showTopSection() {
    topSection.style.display = "flex";
}

export function showLoader() {
    loader.style.display = "flex";
}

export function hideLoader() {
    loader.style.display = "none";
}
