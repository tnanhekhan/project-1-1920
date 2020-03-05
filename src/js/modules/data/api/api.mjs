import {XmlToJson} from "../../../libs/xmltojson.js";

export class Api {
    /**
     *
     * Makes a GET request with the JavaScript Fetch API to OBA Api
     * @param endpoint OBA Api endpoint where to fetch data from
     * @param params URL parameters for GET request
     * @returns {Promise<any>} promise which might contain the response from OBA Api
     */
    async get(endpoint, params) {
        let authorization = "&authorization=ffbc1ededa6f23371bc40df1864843be";
        let output = "&output=json";
        let cors = "https://yacdn.org/proxy/";
        let baseUrl = "https://zoeken.oba.nl/api/v1";
        try {
            let response = await fetch(cors + baseUrl + endpoint + params + authorization + output);
            return response.json()
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
    }

    async getXML(endpoint, params) {
        let xmlToJson = new XmlToJson();
        let authorization = "&authorization=ffbc1ededa6f23371bc40df1864843be";
        let cors = "https://yacdn.org/proxy/";
        let baseUrl = "https://zoeken.oba.nl/api/v1";
        try {
            let response = await fetch(cors + baseUrl + endpoint + params + authorization);
            let parsedResponse = new DOMParser().parseFromString(response.text(), "text/xml");
            return xmlToJson.parse(parsedResponse);
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
    }
}


