//Intial Reference

let movieNameRef = document.getElementById("movie-name");

let searchBtn = document.getElementById("search-btn");

let result = document.getElementById("result");

Key = "5f29499c";
// Function to fetch Data from API

let getMovie = async () => {
  let movieName = movieNameRef.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${Key}`;

  //If input feild is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name 😒</h3>`;
  } 
  else {
    let resp = await fetch(url).catch(()=>{
        result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
    })
    let data = await resp.json();
    if(data.Response == 'True'){
        result.innerHTML = `
        <div class = "info">
             <img src = ${data.Poster} class = "poster">
             <div>
                 <h2>${data.Title}</h2>
                   <div class = "rating">
                     <img src = "star.svg">
                     <h4>${data.imdbRating}</h4>
                   </div>
                   <div class="details">
                     <span>${data.Rated}</span>
                     <span>${data.Year}</span>
                     <span>${data.Runtime}</span>
                   </div>
                  <div class = "genre">
                     <div>${data.Genre.split(",").join("</div><div>")}</div>
                  </div>
             </div>
        </div>
     <h3>Plot:</h3>
     <p>${data.Plot}</p>
     <h3>Caste:</h3>
     <p>${data.Actors}</p>
        
    `;
    }
    else{
        result.innerHTML = `<h3 class="msg">${data.Error} 🤔🤨</h3>`
    }
  }
};

searchBtn.addEventListener('click',getMovie);


