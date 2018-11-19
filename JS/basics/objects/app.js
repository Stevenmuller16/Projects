var movies = [
    {
        Title : "In Bruges",
        Rating: 5,
        hasWatced : true
    },

    {
        Title : "Frozen",
        Rating: 4.5,
        hasWatced : false
    },
    {
        Title : "Max",
        Rating: 5,
        hasWatced : true
    },
    {
        Title : "miserable shit",
        Rating: 3.5,
        hasWatced : false
    }
];

movies.forEach(function(movie){
    if(movie.hasWatced == false)
    {
        console.log("you have watched "+movie.Title + "-" + movie.Rating + "stars");
    }
    else{
        console.log("you have not watched "+movie.Title + "-" + movie.Rating + "stars");
    }

});