function addMovie(poster, title, year, genre, tagline, synopsis, actorPicPaths, actorNames, charNames, ratingNums, allLinks) {
  movieFormat = document.querySelector('.movies');
  newMovie = movieFormat.cloneNode(true);

  newMovie.querySelector('.poster').src = `Posters/${poster}`;
  newMovie.querySelector('.moviename').innerHTML = title;
  newMovie.querySelector('.dategenre').innerHTML = `${year} &#xb7 ${genre}`;
  newMovie.querySelector('.movietagline').innerHTML = tagline;
  newMovie.querySelector('.synopsis').innerHTML = synopsis;

  const actors = newMovie.querySelectorAll('.actor');

  actors.forEach((actor, index) => {
    actor.querySelector('.actor_pic').src = `Actors/${actorPicPaths[index]}`;
    actor.querySelector('.actorname').innerHTML = actorNames[index];
    if (index != 2) {
      actor.querySelector('.charname').innerHTML = `as ${charNames[index]}`;
    }

    else {
      actor.querySelector('.charname').innerHTML = `${charNames[index]}`;
    }
  });

  const ratingSites = newMovie.querySelectorAll('.ratingnum');

  ratingSites.forEach((site, index) => {
    site.innerHTML = ratingNums[index];
  });

  const allAnchors = newMovie.querySelectorAll('a');

  allAnchors.forEach((anchor, index) => {
    anchor.href = allLinks[index];
  });

  document.querySelector('.catalog').appendChild(newMovie);
}

addMovie('arrival.jpg',
  'ARRIVAL',
  '2016',
  'Mystery',
  `"Why are they here?"`,
  'Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.',
  ['amy.jpg', 'jeremy.jpg', 'denis.jpg'],
  ['Amy Adams', 'Jeremy Renner', 'Denis Villeneuve'],
  ['Louise Banks', 'Ian Donnelly', 'Director'],
  ['7.9', '82', '94', '81'],
  ['https://www.imdb.com/name/nm0010736/', 'https://www.imdb.com/name/nm0719637/', 'https://www.imdb.com/name/nm0898288/','https://www.imdb.com/title/tt2543164/', 'https://www.rottentomatoes.com/m/arrival_2016', 'https://www.rottentomatoes.com/m/arrival_2016', 'https://www.metacritic.com/movie/arrival/', 'https://www.amazon.com/Arrival-Amy-Adams/dp/B01LTHYE04/ref=sr_1_2?sr=8-2', 'https://www.justwatch.com/in/movie/arrival']
);

function searchMovie() {
  const searchText = document.querySelector('.searchbox').value;
  const movieNames = document.querySelectorAll('.moviename');
  let foundMovie = false;

  if (searchText) {
    for (let movie of movieNames) {
      if (movie.innerText.toLowerCase() === searchText.toLowerCase()) {
        foundMovie = true;
        break;
      }
    }

    if (foundMovie) {
      document.querySelector('.searchResultText').innerHTML = `We recommend '${searchText}'.`;
    }

    else {
      document.querySelector('.searchResultText').innerHTML = `'${searchText}' is not in our recommendations yet.`;
    }

    document.querySelector('.searchpopupContainer').style.display = `flex`;
  }
}

document.querySelector('.closepopup').onclick = function() {
  document.querySelector('.searchpopupContainer').style.display = `none`;
}

document.querySelector('.searchbutton').onclick = function() {
  searchMovie();
}

document.querySelector('.searchbox').onkeydown = function(event) {
  if (event.key === 'Enter') {
    searchMovie();
  }
}
