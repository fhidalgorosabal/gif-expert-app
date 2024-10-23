
import { PropTypes } from 'prop-types';
import { AddCategory } from './AddCategory';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';

export const NavBar = ({ onAddCategories }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid={ true }>
        <Navbar.Brand>
          <Image src="/images/icon.png" alt="GE" width="40"/><span className="align-text-top"> Gif Expert App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* TODO: Options */}
          </Nav>
          <AddCategory onNewCategory={ onAddCategories }/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBar.propTypes = {
  onAddCategories: PropTypes.func.isRequired
};