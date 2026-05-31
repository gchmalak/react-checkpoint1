import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";

// the root of the entire page
export default function App() {
  return (
    <>
      <div className="App">
        {/* NAVBAR:
            The top navigation bar.
            - bg="dark" sets the background to dark/black
            - variant="dark" makes the text white (for dark backgrounds)
            - expand="lg" means the nav collapses into a hamburger menu on small screens
        */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            {/* logo : clicking it scrolls to the top */}
            <Navbar.Brand href="#">✈ Wanderlust</Navbar.Brand>

            {/* ms-auto pushes the nav links to the right side */}
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#destinations">Destinations</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* HERO HEADING
            A simple centered heading section.
            - text-center: centers all text
            - my-5: adds vertical margin (top & bottom) for spacing
        */}
        <Container className="text-center my-5">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world's most breathtaking destinations</p>
        </Container>

        {/*  DESTINATION CARDS 
            A row of three travel destination cards.
            - g-4: adds gap between cards
            - align-items-stretch: makes all cards the same height
        */}
        <Container>
          <Row className="align-items-stretch g-4">
            {/* Card 1: Paris 
                - Card.Img shows the destination photo at the top
                - Card.Body holds the title, description, and button
                - d-flex flex-column: stacks content vertically inside the card
                - mt-auto on the button pushes it to the bottom of the card
            */}
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

            {/* Card 2: Tokyo */}
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

            {/*Card 3: Santorini  */}
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

        {/*  CONTACT FORM FOOTER 
            A footer section with a contact form.
            - id="contact" links it to the navbar "Contact" link
            - The dark background separates it visually from the rest of the page
        */}
        <footer id="contact" className="footer-section mt-5">
          <Container>
            {/* Section title */}
            <h2 className="text-center mb-2">Contact Us</h2>
            <p className="text-center mb-4">
              Have a question or need help planning your trip? We'd love to hear
              from you.
            </p>

            {/* The form — centered using  (md=6) */}
            <Row className="justify-content-center">
              <Col md={6}>
                <Form>
                  {/* Name field */}
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  {/* Email field */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  {/* Destination dropdown — lets the user pick where they want to go */}
                  <Form.Group className="mb-3" controlId="formDestination">
                    <Form.Label>Preferred Destination</Form.Label>
                    <Form.Select>
                      <option value="">-- Select a destination --</option>
                      <option value="paris">🗼 Paris, France</option>
                      <option value="tokyo">🗾 Tokyo, Japan</option>
                      <option value="santorini">🏛 Santorini, Greece</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Message textarea */}
                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Tell us about your dream trip..."
                    />
                  </Form.Group>

                  {/* Submit button : w-100 makes it  full width */}
                  <Button variant="light" type="submit" className="w-100">
                    Send Message ✈
                  </Button>
                </Form>
              </Col>
            </Row>

            {/* Bottom copyright line */}
            <p className="text-center mt-5 mb-0 footer-copy">
              © 2025 Wanderlust. All rights reserved.
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}
