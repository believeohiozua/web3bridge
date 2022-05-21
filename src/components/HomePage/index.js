import React from 'react';
import { movies } from './movieList';
import MovieCard from './MovieCard';
// import Nav from '../base/Nav';
import Foot from '../base/Foot';
import Hero from './Hero'

function HomePage() {

    const addLike = (id) => {
        if (localStorage.getItem(`likes_of_${id}`)) {
            let likes = parseInt(localStorage.getItem(`likes_of_${id}`));
            localStorage.setItem(`likes_of_${id}`, likes + 1);
            localStorage.setItem('you_liked', 1);
        } else {
            localStorage.setItem(`likes_of_${id}`, 1);
            localStorage.setItem(`you_liked_${id}`, 1);
        }
    }
    const removeLike = (id) => {
        let likes = parseInt(localStorage.getItem(`likes_of_${id}`));
        localStorage.setItem(`likes_of_${id}`, likes - 1);
        localStorage.setItem(`you_liked_${id}`, 0);
    }
    return (
        <>
            {/* <Nav /> */}
            <Hero />
            <div className="container" id="movie_card_sec">
                {movies.map((mov, index) => (
                    <MovieCard
                        key={mov.id}
                        index={index}
                        title={mov.title}
                        description={mov.description}
                        likes={localStorage.getItem(`likes_of_${mov.id}`) ? localStorage.getItem(`likes_of_${mov.id}`) : 0}
                        poster={mov.poster}
                        fee={mov.fee}
                        removeLike={removeLike}
                        addLike={addLike}
                    />
                ))}
            </div>
            <Foot />
        </>
    )
}

export default HomePage;