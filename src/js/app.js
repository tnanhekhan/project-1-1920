import {Api} from "./modules/data/api/api.mjs"

const endpoint = "/search/?";
const query = "q=guiness";
const api = new Api();

api.get(endpoint, query)
    .then(res => {
        let books = res.results;
        console.log(books)
    });
