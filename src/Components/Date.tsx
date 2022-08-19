import React from 'react'
import './Date.css'

function Date() {
    return (
        <section className='date-section text-center pt-4'>
            <div className='container'>
                <div className='date-section-flower d-flex justify-content-center pb-3'>
                    <div className='col-md-3'>
                        <img className='img-fluid' src={process.env.PUBLIC_URL + '/assets/images/date-flowers.png'} alt='flower' />
                    </div>
                </div>
                <div className='date-section-block d-flex justify-content-center'>
                    <div className='d-inline-block'>
                        <h2 className='title-special'>Jan 7th, 2023</h2>
                        <h3 className='date-section-place'>
                            JW Marriott Hotel Hanoi
                            <br />
                            Hà Nội, Việt Nam
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Date;