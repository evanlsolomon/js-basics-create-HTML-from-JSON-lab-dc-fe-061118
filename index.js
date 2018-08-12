document.addEventListener("DOMContentloaded", (e) => {
});
document.getElementById('Titanic').addEventListener('click', clickedMovie);
document.getElementById('Terminator 2').addEventListener('click', clickedMovie);

function setInnerHTML(id){
    document.getElementById(id).innerHTML = movies[selectedMovieName][id];
}

function listCast(cast){
let newCastMember = document.createElement("li");
  for(var person of cast){
  debugger
  newCastMember.innerHTML = person.role + ", " + person.actor;
  debugger
  document.getElementById('cast').appendChild(newCastMember)
  debugger
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
  cast = movies[selectedMovieName].cast
  debugger
  listCast(cast)
}
