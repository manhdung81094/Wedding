import React from 'react';
import './Event.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faLocationDot } from "@fortawesome/free-solid-svg-icons";


function Event() {
    return (
        <section id='events' className='events-section pt-4 text-center'>
            <div className='container'>
                <h1 className='title'>Wedding Event</h1>
                <p className='subtitle mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="accordion" id="accordionExample">
                    <div className="d-flex justify-content-center border-bottom accordion__header">
                        <button className="btn btn-link text-decoration-none" id="headingOne" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Main Ceremony
                        </button>
                        <button className="btn btn-link collapsed text-decoration-none" id="headingTwo" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Dinner
                        </button>
                        <button className="btn btn-link collapsed text-decoration-none" id="headingThree" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Wedding Party
                        </button>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center px-3 pt-2">
                                    <img className="accordion__item-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/ceremony.png'} alt="ceremony" />
                                </div>
                                <div className="col-md-6 text-left px-3 pt-2">
                                    <h3 className="accordion__item-subheading">When and Where</h3>
                                    <p className="d-flex align-items-center"><FontAwesomeIcon icon={faLocationDot} /><span className='ps-2 acoordion-item-desc'>W Hotel, 1423 Hobart St, Pittsburgh, PA, 15217</span></p>
                                    <p className="d-flex align-items-center"><FontAwesomeIcon icon={faClockFour} /><span className='ps-2 acoordion-item-desc'>09:00 - 10:30, Sep 15, 2018</span></p>
                                    <p className="font-weight-bold accordion-item-align">Keep it classy</p>
                                    <div className="btn btn-outline-dark rounded-0 px-3 py-2 accordion-item-button">View on map</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center px-3">
                                    <img className="accordion__item-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/dinner.jpg'} alt="ceremony" />
                                </div>
                                <div className="col-md-6 text-left px-3">
                                    <h3 className="accordion__item-subheading">When and Where</h3>
                                    <p className="d-flex align-items-center"><FontAwesomeIcon icon={faLocationDot} /><span className='ps-2 acoordion-item-desc'>W Hotel, 1423 Hobart St, Pittsburgh, PA, 15217</span></p>
                                    <p className="d-flex align-items-center"><FontAwesomeIcon icon={faClockFour} /><span className='ps-2 acoordion-item-desc'>09:00 - 10:30, Sep 15, 2018</span></p>
                                    <p className="font-weight-bold accordion-item-align">Keep it classy</p>
                                    <div className="btn btn-outline-dark rounded-0 px-3 py-2 accordion-item-button">View on map</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-center px-3">
                                    <img className="accordion__item-img img-fluid" src={process.env.PUBLIC_URL + '/assets/images/party.jpg'} alt="ceremony" />
                                </div>
                                <div className="col-md-6 text-left px-3">
                                    <h3 className="accordion__item-subheading">When and Where</h3>
                                    <p className="d-flex align-items-center"><FontAwesomeIcon icon={faLocationDot} /><span className='ps-2 acoordion-item-desc'>W Hotel, 1423 Hobart St, Pittsburgh, PA, 15217</span></p>
                                    <p className="d-flex align-items-center"><FontAwesomeIcon icon={faClockFour} /><span className='ps-2 acoordion-item-desc'>09:00 - 10:30, Sep 15, 2018</span></p>
                                    <p className="font-weight-bold accordion-item-align">Keep it classy</p>
                                    <div className="btn btn-outline-dark rounded-0 px-3 py-2 accordion-item-button">View on map</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>


    )
}
export default Event;