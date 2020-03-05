import "../../libs/transparency.js";

export class Template {
    renderBooks(books) {
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
                    return "#book/" + this.id
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

    renderDetail(book) {

    }
}