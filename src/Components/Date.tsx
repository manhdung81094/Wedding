import React from 'react'
import './Date.css'

function Date() {
    return (
        <section className='date-section text-center pt-4' id='date'>
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

                <div className='d-flex justify-content-center pb-3'>
                    <button type="button" className="btn btn-modal-attend" data-bs-toggle="modal" data-bs-target="#rsvpModal">
                        Will you be there?
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="rsvpModal" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header border-0 modal-header-image">
                                </div>
                                <div className="modal-body">
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <div className='d-flex justify-content-center'>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/asset-4.png'} alt="" className='img-fluid' />
                                            </div>
                                            <h3 className='text-center pb-3'>Will you attend ?</h3>
                                            <div className='col-md-6 mb-3'>
                                                <input type="text" className='form-control border-0 input-focus border-bottom' placeholder='Your name' />
                                            </div>
                                            <div className='col-md-6 mb-3'>
                                                <input type="text" className='form-control border-0 input-focus border-bottom' placeholder='Your phone' />
                                            </div>
                                            <div className='col-md-6 mb-3'>
                                                <select name="guest" id="select-guest" className='form-select input-focus border-0 border-bottom'>
                                                    <option>No. of guest</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                            <div className='col-md-6 mb-3'>
                                                <select name="event-attend" id="select-event" className='form-select input-focus border-0 border-bottom'>
                                                    <option>Events you will attend</option>
                                                    <option value="All Events">All Events</option>
                                                    <option value="Main Ceremony">Main Ceremony</option>
                                                    <option value="Wedding Party">Wedding Party</option>
                                                    <option value="Wedding Dinner">Wedding Dinner</option>
                                                </select>
                                            </div>
                                            <div className='col-md-12 mb-3'>
                                                <textarea name="message" id="message" cols={40} rows={10} placeholder="Your message (Optional)" defaultValue={""} className="form-control input-focus border-0 border-bottom" />
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <button className='btn btn-modal-send border-0' type='submit'>Send</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer modal-footer-image border-0">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}
export default Date;