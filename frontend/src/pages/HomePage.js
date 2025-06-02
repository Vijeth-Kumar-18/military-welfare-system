import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Home.css";

function HomePage() {
  const navigate = useNavigate();

  const carouselItems = [
    {
      image: "https://images.pexels.com/photos/3476860/pexels-photo-3476860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Empowering Our Heroes and Their Families",
      description: "Explore government welfare schemes for Army personnel and families",
      buttonText: "Explore Schemes"
    },
    {
      image: "https://images.pexels.com/photos/13316037/pexels-photo-13316037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Comprehensive Support Systems",
      description: "Discover benefits for serving and retired defense personnel",
      buttonText: "View Benefits"
    },
    {
      image: "https://images.pexels.com/photos/30804427/pexels-photo-30804427/free-photo-of-military-fighter-jet-on-display-at-air-show.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Dedicated Welfare Services",
      description: "24/7 assistance for all military families",
      buttonText: "Get Assistance"
    }
  ];

  const categories = [
    { title: "Medical", icon: "🩺" },
    { title: "Education", icon: "🎓" },
    { title: "Home Allowance", icon: "🏠" },
    { title: "Pension", icon: "💰" },
    { title: "Scholarships", icon: "📚" },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <Carousel interval={1500} pause={false}>
        {carouselItems.map((scheme, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={scheme.image}
              alt={scheme.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{scheme.title}</h3>
              <p>{scheme.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Search & Categories Section */}
      <div className="container my-5">
        <h4 className="mb-3 text-center">Search Welfare Schemes</h4>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search by scheme, benefit, or keyword..."
        />

        {/* Categories with onClick Navigation */}
        <div className="my-5">
          <Row className="text-center">
            {categories.map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card
                  className="category-card h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/schemes")}
                >
                  <Card.Body>
                    <div className="icon" style={{ fontSize: "2rem" }}>{item.icon}</div>
                    <h5 className="card-title mt-2">{item.title}</h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Featured Section */}
        <div className="my-5">
          <h4 className="text-center mb-4">Featured Welfare Schemes</h4>
          <Row>
            {[1, 2, 3].map((id) => (
              <Col md={4} key={id} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <h5 className="card-title">Scheme Title {id}</h5>
                    <p className="card-text">
                      Short description about this welfare scheme. Click to read more.
                    </p>
                    <Button variant="outline-primary" size="sm">
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
