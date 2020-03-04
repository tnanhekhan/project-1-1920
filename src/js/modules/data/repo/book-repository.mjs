import {Api} from "../api/api.mjs"

export class BookRepository {
    constructor(api = new Api()) {
        this.api = api;
    }

    getYouthBooks(query, page) {
        const endpoint = "/search/?";
        const sisoFilter = `q=(siso:"J*")`;
        const resultPage = `&page=${page}`;
        const facets = `&facet=Language(dut)&facet=Type(book)&facet=topic(${query})&facet=doelgroep(ageYouth)&refine=true`;
        return this.api.get(endpoint, sisoFilter + resultPage + facets);
    }

    getBooks(query, page) {
        const endpoint = "/search/?";
        const sisoFilter = `q=(siso:"J*")`;
        const resultPage = `&page=${page}`;
        const facets = `&facet=Language(dut)&facet=Type(book)&facet=topic(${query})&refine=true`;
        return this.api.get(endpoint, sisoFilter + resultPage + facets);
    }

    getBookDetails(ids) {
        const endpoint = "/details/?";
        return this.api.get(endpoint, `frabl=${ids}&detaillevel=extended`);
    }
}