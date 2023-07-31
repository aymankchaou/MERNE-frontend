import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const NavScroll = () => {
    const navigate = useNavigate();
    const { cartTotalQuantity } = useSelector((state) => state.storecart);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <IconButton size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="error"
                    onClick={() => { navigate("/cart") }}
                > 
                    <ShoppingCartIcon sx={{ fontSize: 40 }} />
                    <Badge badgeContent={cartTotalQuantity > 0 ? cartTotalQuantity : 0}
                        color="success">
                    </Badge>
                </IconButton>
                <Navbar.Brand as={Link} to="/articles">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to="/scategories">Scategories</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/listeadmin">liste Articles</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavScroll
