'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (): JSX.Element => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Udemy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Finance & Accounting
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Office Productivity
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Personal Development
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Music</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Health</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>Log in</Nav.Link>
              <Nav.Link>Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
