// https://react-bootstrap.github.io/components/navbar/
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useRouter} from 'next/router';


export default function MainMenu() {
  const router = useRouter()

  const highlightMenuItem = (menuItem) => {
    if (router.pathname === menuItem) {
      console.log(router.pathname, '  ', menuItem)
      return 'nav-item active'
    } else{
      return 'nav-item'
    }

  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={highlightMenuItem('/')}>Home</Nav.Link>
            <Nav.Link href="/sensory" className={highlightMenuItem('/sensory')}>Sensory Substitution</Nav.Link>
            <Nav.Link href="/glasses" className={highlightMenuItem('/glasses')}>Ultrasonic Glasses</Nav.Link>
            <Nav.Link href="/eyes" className={highlightMenuItem('/eyes')}>Bionic eyes</Nav.Link>
            <Nav.Link href="/about" className={highlightMenuItem('/about')}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

