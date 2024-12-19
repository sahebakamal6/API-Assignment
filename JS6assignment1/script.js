let apiData = fetch("https://www.freetestapi.com/api/v1/movies");
apiData
.then((items) => items.json())
.then((data) => {
    console.log(data);
    let card = data.map((details)=>{
        return`
        <div id="card">
        <img src="${details.poster}" class="image"/>
        <h1>${details.title}</h1>
        <p><b>Rating:</b>${details.rating}</p>
        <p>Release Year:${details.year}</p>
        </div>
        `;
    });
    let box = document.getElementById("box");
    box.innerHTML = card.join("");
})
.catch((error)=>{
    console.log("error fetching API data:",error)
});

