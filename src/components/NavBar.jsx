
import { PropTypes } from 'prop-types';
import { AddCategory } from './AddCategory';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export const NavBar = ({ onAddCategories }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid={ true }>
        <Navbar.Brand>
          <Image src="../../public/icon.png" alt="GE" width="40"/><span className="align-text-top"> Gif Expert App</span>
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
  onAddCategories: PropTypes.string.isRequired
};