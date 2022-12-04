         
function getData(){
                
    let api = "cd406ca55d7ae4c7f2627971c99eb69b";
    let searchBar = document.getElementById("searchbar").value;

    let url = "https://financialmodelingprep.com/api/v3/balance-sheet-statement/"+searchBar+"?apikey="+api;

    // let url = apiURL+searchBar;

    fetch(url).then(response => {
        response.json();
    }).then(data => {
        jsonData = data;
        let container = document.getElementById("container");
    
        container.innerHTML = `<h1>Hello ${jsonData["date"]}</h1>`;
    })
    

    console.log(jsonData);




}

