import React, { memo, useEffect } from "react";

import { Row, Col, Image, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import './Reviews.css'

function Reviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  console.log("Reviews -> reviews", reviews);

  useEffect(() => {
    dispatch.reviews.getReviewsAsync();
  }, []);

  return (
    <Container>
      <h2>What guests are saying aboout homes in the United Kingdom</h2>
      <Row className="ml-1">
        <FontAwesomeIcon className="gold-stars" icon={faStar} size="lg" />
        <p>
          United Kingdom homes were rated <b>4.7 out of 5 starts</b> with{" "}
          <b>10,500,000+ reviews</b>
        </p>
      </Row>

      <Row>
        {reviews.map((review, index) => (
          <Col key={index}>
            <Card className="text-left">
              <Card.Img variant="top" src={review.image} />
              <Card.Body>
                <div className="gold-stars">
                  {Array.apply(null, Array(review.rating)).map((x, i) => (
                    <FontAwesomeIcon icon={faStar} />
                  ))}
                </div>

                <Card.Title>{review.title}</Card.Title>
                <Card.Text>{review.description}</Card.Text>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image
                        src={review.avatar}
                        style={{ width: 50 }}
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      <p>Shimmy</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default memo(Reviews);
