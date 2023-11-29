var obj = {
    method: "GET"
}

fetch("http://localhost:3000/h?num=10010",obj).then(result => {
    result.json().then(jsonBody => {
        console.log(jsonBody["sum"]);
    })
});