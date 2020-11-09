import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarAlt, faUser, faMinus } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'
const SearchBar = () => {
    return (
        <Container>
            <div className="my-5 search-bar-component">
                <h2 className="text-white">Resorts</h2>
                <p className="text-white">Treat yourself! Your dream resort stay is just a few clicks away.</p>
                <div className="d-md-flex search-boxes">
                    <Row className="align-items-center m-0">
                        <Col md={5} className="search-bar-component__box">
                            <FontAwesomeIcon icon={faBed} />
                            <Form.Control placeholder="More places than you could ever go (but try can try)" />
                        </Col>
                        <Col md={3} className="search-bar-component__box">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <Form.Control placeholder="Check-in" />
                            <FontAwesomeIcon icon={faMinus} />
                            <Form.Control placeholder="Check-out" />
                        </Col>
                        <Col md={4} className="search-bar-component__box">
                            <FontAwesomeIcon icon={faUser} />
                            <Form.Control placeholder="2 adults" />
                            <span>.</span>
                            <Form.Control placeholder="0 Children" />
                            <span>.</span>
                            <Form.Control placeholder="1 room" />

                        </Col>
                    </Row>
                    <Button variant="primary">Search</Button>

                </div>
            </div>


        </Container>
    );
};

export default SearchBar;