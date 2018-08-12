
document.getElementById('Titanic').addEventListener('click', clickedMovie);
document.getElementById('Terminator 2').addEventListener('click', clickedMovie);

function setInnerHTML(id){
    document.getElementById(id).innerHTML = movies[selectedMovieName][id];
}

function listCast(cast){
  for(var person of cast){
  let newCastMember = document.createElement("li");
  newCastMember.innerHTML = person.role + ": " + person.actor;
  document.getElementById('cast').appendChild(newCastMember)
  }
}

function listReviews(reviews){
  for(var review of reviews){
  let newReview = document.createElement("li");
  newReview.innerHTML = review.username + ": " + review.content;
  debugger
  document.getElementById('reviews').appendChild(newReview);
  }
}


function clickedMovie(event){
  selectedMovieName = event.srcElement.id;
  console.log('clicked ' + selectedMovieName);
  headerData = ['title', 'director', 'genre', 'filmRating'];
  headerData.map(setInnerHTML);
  document.getElementById('poster').src = movies[selectedMovieName].poster;
  mainData = ['description', 'audienceScore'];
  mainData.map(setInnerHTML);
  cast = movies[selectedMovieName].cast;
  listCast(cast);
  reviews = movies[selectedMovieName].reviews;
  listReviews(reviews);
}
