import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

export default function App() {
  return (
    <>
      <div className="App">
        {/* 1. NAVBAR */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">✈ Wanderlust</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#destinations">Destinations</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* 2. HEADING */}
        <Container className="text-center my-5">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most breathtaking destinations</p>
        </Container>

        {/* 3. THREE CARDS */}
        <Container>
          <Row className="align-items-stretch g-4">
            {/* Card 1 */}
            <Col className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://gotripzi.com/cdn-cgi/image/onerror=redirect,width=3200,height=2400,fit=cover,format=png/_astro/paris-fr-hero.BfTcStng.webp"
                  alt="Paris"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>🗼 Paris, France</Card.Title>
                  <Card.Text>
                    Explore the city of love — art, cuisine, and the Eiffel
                    Tower await you at every corner.
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80"
                  alt="Tokyo"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>🗾 Tokyo, Japan</Card.Title>
                  <Card.Text>
                    A perfect blend of ancient temples and futuristic city life,
                    food, and unforgettable culture.
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80"
                  alt="Santorini"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>🏛 Santorini, Greece</Card.Title>
                  <Card.Text>
                    White-washed cliffs, stunning blue domes, and breathtaking
                    sunsets over the Aegean Sea.
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
