import React from 'react';

function MovieCard({ key, index, title, description, likes, fee, poster, removeLike,
    addLike, checkLike }) {

    React.useEffect(() => {
        localStorage.getItem(`likes_of_${index}`)
        localStorage.getItem(`you_liked_${index}`)
    }, [checkLike])
    return (
        <section className="row my-2 text-white" key={index}>
            <div className={parseInt(index) % 2 === 0 ? "col-md-6" : "col-md-6 order-md-1"}>
                <img src={poster}
                    alt=""
                    className="col-2 img-fluid"
                    id="movie_img"
                />
            </div>
            <div className={parseInt(index) % 2 === 0 ? "col-md-6 my-auto" : "col-md-6 order-md-12 my-auto"}>
                <h1 className="">{title} {checkLike}</h1>
                <span className="text-success fw-bolder"> ₦{fee}</span>
                <p className="">{description}</p>
                <div className={parseInt(index) % 2 === 0 ? "col-md-6 mb-2" : "col-md-6 mb-2"}>
                    {checkLike === 0 || checkLike === NaN ?
                        <button className="btn btn-sm btn-white"
                            onClick={() => addLike(index)}>
                            <i className="fas fa-thumbs-up"></i>  {likes}
                        </button>
                        :
                        <button className="btn btn-sm btn-success"
                            onClick={() => removeLike(index)}>
                            <i className="fas fa-thumbs-down"></i>  {likes}
                        </button>
                    }

                </div>
            </div>

        </section>
    )
}

export default MovieCard