
import React from "react";
import { Tabs, Tab, Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Schemes.css";

const SchemeCard = ({ title, description }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

const SchemesPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Welfare Schemes for Indian Army</h2>
      <Tabs defaultActiveKey="medical" id="schemes-tabs" className="mb-3" fill>
        <Tab eventKey="medical" title="Medical">
          <Row>
            <Col md={12}>
              <SchemeCard
                title="Ex-Servicemen Contributory Health Scheme (ECHS)"
                description="Free medical treatment to ex-servicemen and their dependents through empaneled hospitals."
              />
              <SchemeCard
                title="Armed Forces Medical College Services"
                description="Free or discounted services for defense personnel and families."
              />
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="education" title="Education">
          <Row>
            <Col md={12}>
              <SchemeCard
                title="Kendriya Sainik Board Education Grants"
                description="Financial assistance for children of serving and retired personnel."
              />
              <SchemeCard
                title="Army Welfare Education Society (AWES)"
                description="Supports education through schools, colleges, and scholarships."
              />
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="home" title="Home Allowance">
          <Row>
            <Col md={12}>
              <SchemeCard
                title="Army Group Insurance Fund (AGIF) Housing Loan"
                description="Low-interest home loans for serving personnel."
              />
              <SchemeCard
                title="AWHO (Army Welfare Housing Organization)"
                description="Affordable housing schemes for serving and retired soldiers."
              />
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="pension" title="Pension">
          <Row>
            <Col md={12}>
              <SchemeCard
                title="Defence Pension Disbursement"
                description="Monthly pensions and arrears through SPARSH and PPOs."
              />
              <SchemeCard
                title="Family Pension Scheme"
                description="Support for families of deceased service personnel."
              />
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="scholarships" title="Scholarships">
          <Row>
            <Col md={12}>
              <SchemeCard
                title="Prime Minister’s Scholarship Scheme (PMSS)"
                description="Scholarships for wards of ex-servicemen pursuing higher studies."
              />
              <SchemeCard
                title="Educational Scholarship by KSB"
                description="Financial aid for professional and technical courses."
              />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default SchemesPage;
