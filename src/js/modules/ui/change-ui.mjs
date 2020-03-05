var selectGroupElement = document.getElementById("select-group");
var selectTopicElement = document.getElementById("select-topic");
var topicQuestionElement = document.getElementById("topic-question");
var modal = document.getElementById("modal");

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
export function hideModal() {
    selectGroupElement.style.display = "none";
    topicQuestionElement.style.display = "none";
    selectTopicElement.style.display = "none";
    modal.style.display = "none";
}