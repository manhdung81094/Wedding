import React from 'react'

function Story() {
    return (
        <section className='love-story'>
            <div className='container'>
                <div>
                    <div className="love-story__flowers d-flex justify-content-center">
                        <img src={process.env.PUBLIC_URL + '/assets/images/story-flowers.png'} className="img-fluid" alt="flowers" />
                    </div>
                    <h1 className="title text-center">Love story</h1>
                    <div className='d-flex justify-content-center'>
                        <p className='col-md-8 px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;