import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faCalendarAlt,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

import Reviews from "../components/Reviews/Reviews";

function Host() {
  return (
    <Container>
      <form>
        <h3>Add Your Property</h3>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title for the property"
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description for the property"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Price for the single day stay"
          />
        </div>

        <div className="form-group">
          <label>Owner</label>
          <input
            type="text"
            className="form-control"
            placeholder="Owner Name"
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" className="form-control" placeholder="Country" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
      </form>
    </Container>
  );
}

export default Host;
