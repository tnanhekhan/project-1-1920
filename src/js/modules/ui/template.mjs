import "../../libs/transparency.js";
import * as ChangeUi from "../ui/change-ui.mjs";

export class Template {
    renderBooks(books, currentPage, currentTopic) {
        if (!books) return;

        let booksData = books.map(book => {
            return {
                id: book.frabl.value,
                title: book.titles[0],
                cover: book.coverimages[book.coverimages.length - 1],
                author: book.authors,
                publisher: book.publisher,
                summary: book.summaries,
                description: book.description,
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
                    return this.author;
                }
            },
            ["book-button"]: {
                href: function () {
                    return `#topic/${currentTopic}/${currentPage}/book/${this.id}`
                }
            }
        };

        ChangeUi.showAllSections();
        ChangeUi.showMoreBooksButton();
        ChangeUi.hideLoader();

        Transparency.render(
            document.getElementById("book-results-container"),
            booksData,
            directives,
            null
        );
    }

    renderDetail(bookDetails) {
        if (!bookDetails) return;
        let bookDetailsArray = [];
        bookDetailsArray.push(bookDetails);

        let details = bookDetailsArray.map(details => {
            return {
                title: details.titles[0],
                cover: details.coverimages[0],
                author: details.authors,
                summary: details.summaries
            }
        });

        let directives = {
            ["book-detail-cover-image"]: {
                src: function () {
                    return this.cover.substring(0, this.cover.lastIndexOf('=')) + "=400";
                }
            },
            ["book-detail-title"]: {
                text: function () {
                    return this.title;
                }
            },
            ["book-detail-author"]: {
                text: function () {
                    return this.author;
                }
            },
            ["book-detail-description"]: {
                text: function () {
                    return this.summary;
                }
            }
        };

        ChangeUi.showDetail();
        ChangeUi.hideLoader();
        Transparency.render(
            document.getElementById("book-detail-container"),
            details,
            directives,
            null
        )
    }

    renderGroups(groups) {
        if (!groups) return;

        let groupData = groups.map(group => {
            return {
                group: group
            };
        });

        let directives = {
            ["modal-group"]: {
                text: function () {
                    return this.group;
                },
                href: function () {
                    let groupNumber = this.group.match(/\d+$/)[0];
                    return "#group/" + groupNumber;
                }
            }
        };

        Transparency.render(
            document.getElementById("modal-group-container"),
            groupData,
            directives,
            null
        );
    }

    renderTopics(topics) {
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
                },
                href: function () {
                    return "#topic/" + this.topic.toLowerCase();
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
}