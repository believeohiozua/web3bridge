import React from 'react'

function Hero() {
    return (
        <section className=" text-white" id="hero_sec">
            <div className="" id="hero_sub_sec">
                <div className="col-md-6 col-lg-5 mx-auto text-center">
                    <div className="">
                        <h1 className="display-5 text-center fw-bolder">
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <p className="fs-2">
                            Watch anywhere. Cancel anytime.
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                    </div>
                    <div className="">
                        <form className="">
                            <div className="form-group">
                                <input type="email" className="form-control py-3" placeholder="Email Address" />
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-danger btn-lg">Get Started</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ section>
    )
}

export default Hero