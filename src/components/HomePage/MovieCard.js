import React from 'react';

function MovieCard({ key, index, title, description, likes, fee, poster, removeLike,
    addLike }) {
    return (
        <section className="row my-4" key={index}>
            <div className={parseInt(index) % 2 == 0 ? "col-md-6" : "col-md-6 order-md-1"}>
                <img src={poster}
                    alt=""
                    className="img-fluid"
                    id="movie_img"
                />
            </div>
            <div className={parseInt(index) % 2 == 0 ? "col-md-6" : "col-md-6 order-md-12"}>
                <h1 className="">{title}</h1>
                <span className="text-success fw-bolder"> ₦{fee}</span>
                <p className="">{description}</p>
                <div className={parseInt(index) % 2 == 0 ? "col-md-6 mb-2" : "col-md-6 mb-2"}>
                    {parseInt(localStorage.getItem(`you_liked_${key}`)) == 0 || localStorage.getItem(`you_liked_${key}`) == undefined ?
                        <button className="btn btn-sm"
                            onClick={() => addLike(key)}>
                            <i className="fas fa-thumbs-up"></i>  {likes}
                        </button>
                        :
                        <button className="btn btn-sm btn-success"
                            onClick={() => removeLike(key)}>
                            <i className="fas fa-thumbs-down"></i>  {likes}
                        </button>
                    }

                </div>
            </div>

        </section>
    )
}

export default MovieCard