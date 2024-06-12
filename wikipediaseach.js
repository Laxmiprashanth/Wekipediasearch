let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function ceateandAppendSearchResults(Results) {

    console.log(Results);
    let {
        title,
        link,
        description
    } = Results;
    let y = document.createElement("div");
    y.classList.add("result-item");

    searchResults.appendChild(y);
    let titlee = document.createElement("a");
    titlee.classList.add("result-title");
    titlee.textContent = title;
    titlee.href = link;
    titlee.target = "_blank";
    searchResults.appendChild(titlee);


    let ui = document.createElement("br");
    searchResults.appendChild(ui);
    let l = document.createElement("a");
    l.classList.add("result-url");
    l.href = link;
    l.textContent = link;
    l.target = "_blank";
    searchResults.appendChild(l);
    let ui1 = document.createElement("br");
    searchResults.appendChild(ui1);
    let p = document.createElement("p");
    p.textContent = description;
    searchResults.appendChild(p);
}

function display_Results(search_results) {
    spinner.classList.toggle("d-none");
    for (let result of search_results) {
        ceateandAppendSearchResults(result);
    }
}


//create a  result item
//crete title element 
//create break element 
//create url element
//create brak element 
//create descriptionelement


function searchWikipedia(event) {
    if (event.key === "Enter") {
        let searchInput1 = searchInput.value;
        searchResults.textContent = "";
        spinner.classList.toggle("d-none");

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput1;
        let options = {
            method: "GET",
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(JsonData) {
                let {
                    search_results
                } = JsonData;
                console.log(JsonData);
                display_Results(search_results);
            });
    }

}
searchInput.addEventListener("keydown", searchWikipedia);