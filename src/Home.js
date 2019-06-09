import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div className="home">
      <div className="body-container">
        <div class="section">
          <div class="page-center-small text-center">
            <Row>
              <Col sm="6">
                <Link to="/basics">
                  <Card>
                    <Card.Body>
                      <i class="fa fa-shapes" />
                      <Card.Title as="h2">Basics</Card.Title>
                      <Card.Text>Learn some of the fundamentals.</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col sm="6">
                <Link to="/quiz">
                  <Card>
                    <Card.Body>
                      <i class="fa fa-dollar-sign" />
                      <Card.Title as="h2">Down to Business</Card.Title>
                      <Card.Text>Let's find your path forward.</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
