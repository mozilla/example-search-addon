var { data } = require("self");
var { SearchSettings } = require("search-settings");

// Get the engine URL based on our URL.
const ENGINE_URL = data.url("search.xml");

exports.main = function main(options) {
    SearchSettings.init(options.loadReason);

    SearchSettings.addSearchEngine(ENGINE_URL, true);
    SearchSettings.addSearchEngine({
        name: "Example Engine Two",
        iconURL: "data:image/png;base64, \
            iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAYagMeiWXwAAAAJiS0dE \
            AP+Hj8y/AAAACW9GRnMAAAAgAAAAAADdhrP4AAAACXZwQWcAAAAwAAAAEABbaqj1AAABUklEQVQo \
            z4XRP0jUcRzG8dfvd4dEdymR3WBdCpYIIjS0NARNQeZeODXYUlBQ4dIk0SIVJDgGTXHQ2h8IgkSI \
            BMeg0rSTuwiSBtOL6vx9vw1XBzf5fJZnePg8PLzZRcl/c7/ssnGDWPXM3PVaR+De+eRhf6GgaFvJ \
            a7Fh8kalHbh7ofB4LNlnyQfBIeu6NGOcuFkhYeZw8n6iWBL98Mo66DZkqWF4qp4Sr/YVewXfPVIV \
            RdGmnLQQr5ESxnuteeOJptC+T84I58gTj1Ut2+oY1+OEA+JQ60Nzw6YgyAu69QiOG/BHaJInrBlh \
            1EH7LSpZFuR9UxNWWxXPjQw6KYfTFmzhpX6fedGqmA3bK1ZkMnsdURSkNoRGeEDKdD1einFRJoqO \
            2jGg7GeMk9N1cjD/7tTHX2e/dv32xVt7ZKqN7OLtSgesW2VX2rCemrtT243zP/0FuyeC3bHTKo4A \
            AAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMDItMjFUMTc6NDY6NDYtMDg6MDDkLeHxAAAAJXRFWHRk \
            YXRlOm1vZGlmeQAyMDEzLTAyLTIxVDE3OjQ2OjQ2LTA4OjAwlXBZTQAAABl0RVh0U29mdHdhcmUA \
            QWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=",
        alias: "example-engine-two",
        description: "Another example search engine",
        method: "GET", // The HTTP request method
        url: "https://www.example.com/?foo=bar&q=_searchTerms_"
    });

    SearchSettings.setPref("browser.newtab.url", "http://www.example.com/new-tab");
}
