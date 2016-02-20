angular.module('app').service('svc', function($http){

  this.search = function(paramConf){
      return  $http({
        url: 'http://www.omdbapi.com',
        method: "GET",
        params: paramConf,
        }).then(function(response) {
          return response;
      });
  };

});


// Poster: "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg"
// Title: "Batman Begins"
// Type: "movie"
// Year: "2005"
// imdbID: "tt0372784"

// Actors: "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl"
// Awards: "Won 1 Oscar. Another 9 wins & 22 nominations."
// Country: "USA, UK"
// Director: "Tim Burton"
// Genre: "Action, Adventure"
// Language: "English, French"
// Metascore: "66"
// Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker."
// Poster: "http://ia.media-imdb.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
// Rated: "PG-13"
// Released: "23 Jun 1989"
// Response: "True"
// Runtime: "126 min"
// Title: "Batman"
// Type: "movie"
// Writer: "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)"
// Year: "1989"
// imdbID: "tt0096895"
// imdbRating: "7.6"
// imdbVotes: "256,000"
