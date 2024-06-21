import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAddSlip = () => {
    navigate('/packing-details');
  };

  const handleViewSlip = () => {
    navigate('/packing-slip');
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="mb-4">
        <Col className="text-center">
          <h1>MAHENDRA GARMENTS</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="m-3" 
            onClick={handleAddSlip}
          >
            Add Slip
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="m-3" 
            onClick={handleViewSlip}
          >
            View Slip
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
