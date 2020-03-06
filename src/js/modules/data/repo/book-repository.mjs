import {Api} from "../api/api.mjs"

export class BookRepository {
    constructor(api = new Api()) {
        this.api = api;
    }

    getAdultBooks(topic, page) {
        const endpoint = "/search/?";
        const searchQuery = `q=special:all`;
        const resultPage = `&page=${page}`;
        const facets = `&facet=Language(dut)&facet=Type(book)&facet=topic(${topic})&facet=doelgroep(ageAdults)&refine=true`;
        return this.api.get(endpoint, searchQuery + resultPage + facets);
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

    getBookDetails(id) {
        const endpoint = "/details/?";
        const params = `frabl=${id}&detaillevel=librarian`;
        return this.api.get(endpoint, params);
    }

    getBookAvailability(id) {
        const endpoint = "/availability/?";
        const params = `frabl=${id}&detaillevel=librarian`;
        return this.api.getXML(endpoint, params)
    }
}