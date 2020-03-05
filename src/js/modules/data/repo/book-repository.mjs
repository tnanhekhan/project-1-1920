import {Api} from "../api/api.mjs"

export class BookRepository {
    constructor(api = new Api()) {
        this.api = api;
    }

    getYouthBooks(topic, page) {
        const endpoint = "/search/?";
        const searchQuery = `q=special:all`;
        const resultPage = `&page=${page}`;
        const facets = `&facet=Language(dut)&facet=Type(book)&facet=topic(${topic})&facet=doelgroep(ageYouth)&refine=true`;
        return this.api.get(endpoint, searchQuery + resultPage + facets);
    }

    getBooks(topic, page) {
        const endpoint = "/search/?";
        const searchQuery = `q=special:all`;
        const resultPage = `&page=${page}`;
        const facets = `&facet=Language(dut)&facet=Type(book)&facet=topic(${topic})&refine=true`;
        return this.api.get(endpoint, searchQuery + resultPage + facets);
    }

    getBookDetails(ids) {
        const endpoint = "/details/?";
        return this.api.get(endpoint, `frabl=${ids}&detaillevel=extended`);
    }
}