import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pricing from './Pricing';
import { faBreadSlice, faBuilding, faDotCircle, faHome, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DetailsPage.css'
import tripadvisorIcon from '../../../assests/images/tripadvisor.svg'
const DetailsPage = () => {

    return (
        <div className="details-page">
            <Container>
                <Row className="m-0 mb-5 images">
                    <Col md={12} className="p-0 pb-4">
                        <div className="d-flex">
                            <h4 className="hotel-name mr-2">Lorem ipsum dolor sit.</h4>
                            <div className="gold-stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <p>Lorem, ipsum, Lorem, ipsum</p>
                        <div className="d-flex align-items-center review-count">
                            <img style={{width:30}} src={tripadvisorIcon} alt="tripadvisor"/>
                            <div className="circles mx-2">
                                <FontAwesomeIcon icon={faDotCircle} />
                                <FontAwesomeIcon icon={faDotCircle} />
                                <FontAwesomeIcon icon={faDotCircle} />
                                <FontAwesomeIcon icon={faDotCircle} />
                                <FontAwesomeIcon icon={faDotCircle} />
                            </div>
                            <span>325 reviews</span>
                        </div>
                    </Col>
                    <Col md={8} className="p-0 border">
                        <img src="https://imgur.com/9RWhASb.png" className="img-fluid" alt="" />
                    </Col>
                    <Col md={4} className="p-0 border">
                        <img src="https://imgur.com/9RWhASb.png" className="img-fluid border" alt="" />
                        <img src="https://imgur.com/9RWhASb.png" className="img-fluid border" alt="" />
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={8} className="pr-md-5 mb-3">
                        <div className="d-flex justify-content-between">
                            <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                            <div className="text-center">
                                <img src="https://imgur.com/Br6DVI1.png"
                                    className="host-img"
                                    alt="" />
                                <p>Shimmy</p>
                            </div>

                        </div>
                        <p className="text-secondary">Greater London</p>

                        <div className="features py-4">
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faHome} />
                                <div>
                                    <h6>Private room in flat</h6>
                                    <div className="d-flex">
                                        <p className="mr-3">2 guest</p>
                                        <p className="mr-3">1 bedroom</p>
                                        <p className="mr-3">1 bed</p>
                                        <p className="mr-3">1 shared bathroom</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faBuilding} />
                                <div>
                                    <h6>Self check-in</h6>
                                    <p>Check yourself in with the lockbox</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faBreadSlice} />
                                <div>
                                    <h6>Breakfast</h6>
                                    <p>This is one of a few places in the area that has this feature</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faPhone} />
                                <div>
                                    <h6>Great communication</h6>
                                    <p>100% of recent guests rated Shimmary 5-star in communication</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-top pt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur.</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veniam aperiam saepe aliquam sit libero non voluptates tempore est totam numquam, perferendis dolore a minus dolores ullam quaerat necessitatibus hic? Consequuntur commodi provident vero soluta placeat pariatur dolor corporis repudiandae! Distinctio maxime ad, aspernatur, eos dignissimos sed dolor repellendus tempore a sint quae facilis nesciunt quasi ullam tempora ut. Doloribus exercitationem dicta maxime adipisci! Necessitatibus, nihil? Ipsam repellat, aut distinctio sint et laboriosam, esse, corporis consequatur praesentium aliquam saepe fugit repellendus. Aliquam quos excepturi molestias cumque iusto? Fugiat consequuntur, cupiditate quos accusamus ipsam distinctio voluptatibus sit fuga. Facere, consequuntur sint!
                        </div>
                    </Col>

                    <Col md={4} className="pl-md-0">
                        <Pricing />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailsPage;