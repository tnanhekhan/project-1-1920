import {Api} from "./modules/data/api/api.mjs";
import {BookRepository} from "./modules/data/repo/book-repository.mjs";
import "./libs/transparency.js";
import "./libs/routie.js";
import * as Transparency from "./modules/ui/transparency.mjs";
import "./modules/ui/router.mjs";

const groups = ["Groep 4", "Groep 5", "Groep 6", "Groep 7", "Groep 8"]

const topics = [
    [
        "Dieren",
        "Honden",
        "Katten",
        "Paarden",
        "Dinosaurussen",
        "Vogels",
        "Huisdieren",
        "Wilde dieren",
        "Dolfijnen",
        "Zindelijkheid",
        "Insecten"
    ],
    ["Seizoenen", "Lente", "Zomer", "Herfst", "Winter", "jaargetijden", "Pasen"],
    [
        "Landen",
        "Nederland",
        "Frankrijk",
        "Amsterdam",
        "Verenigde Staten",
        "Afrika",
        "Suriname",
        "New York (stad)"
    ],
    [
        "Geschiedenis",
        "Middeleeuwen",
        "17e eeuw",
        "19e eeuw",
        "Griekse Oudheid",
        "Toekomst",
        "Egyptische Oudheid",
        "Prehistorie",
        "Jodenvervolging"
    ],
    ["Sport", "Voetbal"],
    ["Mode", "Kleding", "Winkelen"],
    ["Natuur", "Aarde", "Natuurwetenschappen", "Ruimtevaart"],
    ["Reizen"],
    ["Eten"],
    ["Muziek"]
];

let currentPage = 1;

init();

document.getElementById("yes-button").onclick = () => {
    window.location = window.location.href + "/yes";
};

document.getElementById("no-button").onclick = () => {
    window.location = window.location.href + "/no";
};

function init() {
    Transparency.setGroups(groups);
    Transparency.setMainTopics(topics);
}

