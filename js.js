space = "&nbsp;";
enter = "<br>";
hr = "<hr>";

const disabledFilms = new Set();

function disableChangeVideoSource(classNum) {
  disabledFilms.add(classNum);
}

function enableChangeVideoSource(classNum) {
  disabledFilms.delete(classNum);
}

function addFilmHoverToOthers(exceptClass) {
  var allFilms = document.querySelectorAll('[class^="film"]');
  allFilms.forEach(function(film) {
    if (!film.classList.contains(exceptClass)) {
      film.classList.add('filmHover');
    }
  });
}

function removeFilmHoverFromOthers(exceptClass) {
  var allFilms = document.querySelectorAll('[class^="film"]');
  allFilms.forEach(function(film) {
    if (!film.classList.contains(exceptClass)) {
      film.classList.remove('filmHover');
    }
  });
}

function changeVideoSource(classNum) {
  if (disabledFilms.has(classNum)) return; // Do not change the video source if it is disabled for this class

  var video = document.getElementById('myVideo');
  var source = video.querySelector('source');
  source.src = 'webreel' + classNum + '.mp4'; // Adjust the path and file extension if needed
  video.load(); // Reload the video to apply the new source
}

function addHoverEvents() {
  var allFilms = document.querySelectorAll('[class^="film"]');
  allFilms.forEach(function(film) {
    film.addEventListener('mouseover', function() {
      addFilmHoverToOthers(film.classList[0]);
      var classNum = film.classList[0].replace('film', ''); // Extract the number from the class
      changeVideoSource(classNum);
    });
    film.addEventListener('mouseout', function() {
      removeFilmHoverFromOthers(film.classList[0]);
    });
  });
}

// Call the function to add hover events
addHoverEvents();

// Disable video source change for film
disableChangeVideoSource('1');
disableChangeVideoSource('2');
disableChangeVideoSource('3');

disableChangeVideoSource('7');
disableChangeVideoSource('8');
disableChangeVideoSource('9');
