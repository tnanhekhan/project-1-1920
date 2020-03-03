import {Api} from "../api/api.mjs"

export class BookRepository {
    constructor(api = new Api()) {
        this.api = api;
    }

    getBooks(query, page) {
        const endpoint = "/search/?";
        return this.api.get(endpoint, `q=${query}&page=${page}`);
    }

    getBookDetails(ids) {
        const endpoint = "/details/?";
        return this.api.get(endpoint, `frabl=${ids}&librarian=true`);
    }
}