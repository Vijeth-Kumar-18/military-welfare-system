import React from "react";
import { 
  Tabs, 
  Tab, 
  Container, 
  Row, 
  Col, 
  Card, 
  Carousel,
  Badge
} from "react-bootstrap";
import "../styles/Schemes.css";

const SchemeCard = ({ title, description, icon }) => (
  <Card className="mb-4 border-0 shadow-hover" style={{ borderRadius: "15px", transition: "all 0.3s ease" }}>
    <Card.Body className="p-4">
      <div className="d-flex">
        <div className="me-3" style={{ fontSize: "2rem", color: "#0d6efd" }}>
          <i className={`fas fa-${icon}`}></i>
        </div>
        <div>
          <Card.Title className="fw-bold text-primary">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <Badge pill bg="primary" className="mt-2">
            Learn More <i className="fas fa-arrow-right ms-1"></i>
          </Badge>
        </div>
      </div>
    </Card.Body>
  </Card>
);

const SchemesPage = () => {
  const featuredSchemes = [
    {
      title: "ECHS Medical Scheme",
      description: "Comprehensive healthcare for veterans and families",
      image: "https://ckshospitals.com/wp-content/uploads/2024/02/banner-11.05-1024x341-1-1.jpg"
    },
    {
      title: "PM Scholarship Scheme",
      description: "Support for higher education of soldiers' children",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuKIDhTlBJ2y3mfvGlXiHBw7lua7nN7loAw&s"
    },
    {
      title: "AWHO Housing",
      description: "Affordable housing solutions for defense personnel",
      image: "https://awhosena.in/new/images/font-slides/omr1.jpg"
    }
  ];

  return (
    <div className="schemes-page">
      {/* Hero Carousel */}
      <Carousel fade controls={false} indicators={false} className="mb-5">
        {featuredSchemes.map((scheme, index) => (
          <Carousel.Item key={index}>
            <div 
              className="d-flex align-items-center justify-content-center" 
              style={{
                height: "400px",
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${scheme.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="text-center text-white py-5">
                <h1 className="display-4 fw-bold mb-3">{scheme.title}</h1>
                <p className="lead mb-4">{scheme.description}</p>
                <button className="btn btn-primary btn-lg px-4 py-2">
                  View Details <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="my-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-primary mb-3">
            <i className="fas fa-hand-holding-heart me-2"></i>
            Welfare Schemes for Indian Army
          </h1>
          <p className="lead text-muted">
            Comprehensive support programs for serving and retired defense personnel and their families
          </p>
        </div>

        {/* Schemes Tabs */}
        <Tabs 
          defaultActiveKey="medical" 
          id="schemes-tabs" 
          className="mb-4 custom-tabs" 
          fill
        >
          <Tab 
            eventKey="medical" 
            title={
              <span>
                <i className="fas fa-hospital me-2"></i> Medical
              </span>
            }
          >
            <Row className="mt-4">
              <Col lg={6}>
                <SchemeCard
                  title="Ex-Servicemen Contributory Health Scheme (ECHS)"
                  description="Provides comprehensive healthcare through a network of 426 polyclinics across India, offering cashless treatment to ex-servicemen and their dependents."
                  icon="hospital-user"
                />
              </Col>
              <Col lg={6}>
                <SchemeCard
                  title="Armed Forces Medical College Services"
                  description="Specialized medical care and treatment facilities at AFMC Pune and associated hospitals for serving and retired personnel with priority services."
                  icon="stethoscope"
                />
              </Col>
            </Row>
          </Tab>

          <Tab 
            eventKey="education" 
            title={
              <span>
                <i className="fas fa-graduation-cap me-2"></i> Education
              </span>
            }
          >
            <Row className="mt-4">
              <Col lg={6}>
                <SchemeCard
                  title="Kendriya Sainik Board Education Grants"
                  description="Financial assistance up to ₹50,000 per annum for children of serving and retired personnel pursuing professional courses."
                  icon="book-open"
                />
              </Col>
              <Col lg={6}>
                <SchemeCard
                  title="Army Welfare Education Society (AWES)"
                  description="Manages 137 Army Public Schools and 11 professional colleges across India with fee concessions for wards of Army personnel."
                  icon="school"
                />
              </Col>
            </Row>
          </Tab>

          <Tab 
            eventKey="home" 
            title={
              <span>
                <i className="fas fa-home me-2"></i> Housing
              </span>
            }
          >
            <Row className="mt-4">
              <Col lg={6}>
                <SchemeCard
                  title="AGIF Housing Loan"
                  description="Home loans up to ₹50 lakhs at concessional interest rates (currently 7.5%) with extended repayment period of 30 years."
                  icon="house-user"
                />
              </Col>
              <Col lg={6}>
                <SchemeCard
                  title="AWHO Housing Projects"
                  description="Affordable housing schemes across 50+ locations in India with priority allotment to serving and veteran Army personnel."
                  icon="building"
                />
              </Col>
            </Row>
          </Tab>

          <Tab 
            eventKey="pension" 
            title={
              <span>
                <i className="fas fa-rupee-sign me-2"></i> Pension
              </span>
            }
          >
            <Row className="mt-4">
              <Col lg={6}>
                <SchemeCard
                  title="Defence Pension Disbursement"
                  description="SPARSH system for seamless pension processing with direct bank transfers and online grievance redressal."
                  icon="wallet"
                />
              </Col>
              <Col lg={6}>
                <SchemeCard
                  title="Family Pension Scheme"
                  description="Lifetime pension for families of martyrs and deceased personnel with additional benefits for disabled dependents."
                  icon="heart"
                />
              </Col>
            </Row>
          </Tab>

          <Tab 
            eventKey="scholarships" 
            title={
              <span>
                <i className="fas fa-award me-2"></i> Scholarships
              </span>
            }
          >
            <Row className="mt-4">
              <Col lg={6}>
                <SchemeCard
                  title="Prime Minister's Scholarship Scheme"
                  description="₹2500-3000 per month for professional degree courses to wards of ex-servicemen and widows."
                  icon="graduation-cap"
                />
              </Col>
              <Col lg={6}>
                <SchemeCard
                  title="KSB Educational Scholarship"
                  description="Financial aid up to ₹1.5 lakhs for technical and professional courses with special provisions for disabled wards."
                  icon="user-graduate"
                />
              </Col>
            </Row>
          </Tab>
        </Tabs>

        {/* Quick Links Section */}
        <div className="mt-5 pt-4 border-top">
          <h3 className="fw-bold mb-4 text-center">
            <i className="fas fa-link me-2 text-primary"></i>
            Quick Access Links
          </h3>
          <Row className="g-4">
            <Col md={4}>
              <Card className="border-0 shadow-sm text-center h-100">
                <Card.Body>
                  <div className="icon-circle mb-3 mx-auto bg-primary text-white">
                    <i className="fas fa-file-download fa-2x"></i>
                  </div>
                  <h5>Application Forms</h5>
                  <p className="small text-muted">Download all scheme application forms</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm text-center h-100">
                <Card.Body>
                  <div className="icon-circle mb-3 mx-auto bg-primary text-white">
                    <i className="fas fa-question-circle fa-2x"></i>
                  </div>
                  <h5>FAQs</h5>
                  <p className="small text-muted">Find answers to common questions</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm text-center h-100">
                <Card.Body>
                  <div className="icon-circle mb-3 mx-auto bg-primary text-white">
                    <i className="fas fa-headset fa-2x"></i>
                  </div>
                  <h5>24/7 Helpline</h5>
                  <p className="small text-muted">Call 1800-123-456 for assistance</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SchemesPage;