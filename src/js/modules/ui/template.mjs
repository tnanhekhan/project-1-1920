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

        document.querySelector(".main-section").style.display = "block";
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
        console.log(bookDetailsArray);
        // bookDetails.marc21.fields.forEach(field => {
        //     console.log(field[Object.keys(field)[0]].subfields)
        // });

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
                    return this.cover.substring(0, this.cover.lastIndexOf('=')) + "=500";
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

        document.querySelector(".detail-section").style.display = "block";
        Transparency.render(
            document.getElementById("book-detail-container"),
            details,
            directives,
            null
        )
    }
}