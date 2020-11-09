import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFlag, faQuestionCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";

import './Pricing.css';

const Pricing = () => {
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="pricing-component">
            <Form onSubmit={handleSubmit(onSubmit)} className="p-4 pricing">
                <h4>$24 <span className="font-weight-lighter small">Per Night</span></h4>
                <p><FontAwesomeIcon className="text-primary" icon={faStar} /> <span>4.58(215 reviews)</span></p>
                <Form.Group>
                    <Form.Label>Dates</Form.Label>
                    <div className="d-flex align-items-center form-control">
                        <Form.Control ref={register({ required: true })} type="date" />
                        <FontAwesomeIcon icon={faArrowRight} />
                        <Form.Control ref={register({ required: true })} className="text-right" type="date" />
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Guests</Form.Label>
                    <Form.Control ref={register({ required: true })} name="guest" as="select">
                        <option value="1">1 guest</option>
                        <option value="2">2 guest</option>
                        <option value="3">3 guest</option>
                        <option value="4">4 guest</option>
                    </Form.Control>
                </Form.Group>

                <ul className="preview list-unstyled">
                    <li>
                        <span>34x1 night</span>
                        <span>$124</span>
                    </li>
                    <li>
                        <span>Cleaning fee <FontAwesomeIcon icon={faQuestionCircle} /> </span>
                        <span>$5</span>
                    </li>
                    <li>
                        <span>Service fee <FontAwesomeIcon icon={faQuestionCircle} /></span>
                        <span>$4</span>
                    </li>
                    <li className="total font-weight-bold">
                        <span>Total</span>
                        <span>$33</span>
                    </li>
                </ul>
                <Form.Group>
                    <input type="hidden" ref={register({ required: true })} defaultValue="130" name="totalFee" />
                    <Button type="submit" block variant="danger">Reserve</Button>
                    <p className="text-secondary small mt-3 mb-0 text-center">you won't be charged yet</p>
                    <p className="text-secondary small mt-0 text-center">Certain reservations may also require a security deposit.</p>
                </Form.Group>
            </Form>
            <div className="text-center mt-3">
                <FontAwesomeIcon icon={faFlag} /> <span>Report this listing</span>
            </div>
        </div>
    );
};

export default Pricing;