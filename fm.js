

const flightMovies = (flightLength, movieLengths) => {
    
    const movies = {}

    for(let i=0; i < movieLengths.length; i++){
      
        const firstMovie = movieLengths[i]
        
        const secondMovie = flightLength - firstMovie

        if (Object.values(movies).includes(secondMovie)){
            return true
        }
        
        movies[i] = movieLengths[i]
       
    }

    return false
    
}

let array = [90, 240, 110, 85]

flightMovies(200, array)