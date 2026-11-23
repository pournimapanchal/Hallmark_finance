import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaUserCircle, FaEnvelope, FaPhone } from "react-icons/fa";

const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    return (
      <Container className="mt-5 text-center">
        <h3>Please login first.</h3>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={7}>
          <Card className="shadow border-0 rounded-4">
            <Card.Body className="p-5">

              <div className="text-center mb-4">
                <FaUserCircle size={90} color="#198754" />
                <h2 className="mt-3">{user.fullName}</h2>
                <p className="text-muted">Hallmark Customer</p>
              </div>

              <hr />

              <div className="mb-4">
                <h5>
                  <FaUserCircle className="me-2 text-success" />
                  Full Name
                </h5>
                <p>{user.fullName}</p>
              </div>

              <div className="mb-4">
                <h5>
                  <FaEnvelope className="me-2 text-success" />
                  Email
                </h5>
                <p>{user.email}</p>
              </div>

              <div className="mb-4">
                <h5>
                  <FaPhone className="me-2 text-success" />
                  Mobile Number
                </h5>
                <p>{user.mobile}</p>
              </div>
              




            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;