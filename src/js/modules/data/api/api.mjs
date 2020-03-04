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
        let detail = "&detaillevel=basic";
        try {
            let response = await fetch(cors + baseUrl + endpoint + params + authorization + output + detail);
            return response.json()
        } catch (error) {
            console.log(`Something went wrong: ${error}`);
        }
    }
}


