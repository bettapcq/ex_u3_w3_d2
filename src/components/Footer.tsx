import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="bg-body-tertiary pt-3" data-bs-theme='dark' fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <p className="text-secondary text-center">&copy;SpaceFlight - 2025</p>
          <p className="text-secondary text-center">Created By Betta Pcq</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
