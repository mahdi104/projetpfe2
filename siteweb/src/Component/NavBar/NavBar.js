import React from "react";
import { Navbar, Nav, NavDropdown, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../Assets/image/logo.png";
import Panier from "../../Assets/image/Panier.png"
import { logout } from "../../JS/action/user";

import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const isUser = useSelector((state) => state.userReducer.isUser);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="light" expand="lg" className="my-navbar">
       
          <img src={logo} alt="logo" className="logo"/> 

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/presentation" className="navbar-item">
                Présentation
              </Nav.Link>
              <Nav.Link href="/Nos References" className="navbar-item">
                Nos Réferences
              </Nav.Link>
              <Nav.Link href="/productlist" className="navbar-item">
                Liste Des Produits
              </Nav.Link>
              <Nav.Link href="/cart" className="navbar-item">
                <img src={Panier} alt="panier" className="panier"/>
              </Nav.Link>
              {/* <NavDropdown
                title="Catégories"
                id="basic-nav-dropdown"
                className="navbar-item"
              >
                <NavDropdown.Item href="/Corporelle" className="drop-color">
                  Hygiène Corporelle
                </NavDropdown.Item>
                <NavDropdown.Item href="/Linge" className="drop-color">
                  Hygiène du Linge
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Hygiène Cuisine
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Sanitaire">
                  Hygiène Sanitaires
                </NavDropdown.Item>
                <NavDropdown.Item href="/Materiel">
                  Matériel de Nettoyage
                </NavDropdown.Item>
              </NavDropdown> */}

              {isUser ? (
                <Form inline>
                  <Link to="/" onClick={() => dispatch(logout())}>
                    <Button className="style-btn" variant="outline-info">
                      Logout
                    </Button>
                  </Link>
                </Form>
              ) : (
                <div>
                  <Link to="/signin">
                    <Button variant="outline-info" className="style-btn">
                      SignIn
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline-info" className="style-btn">
                      SignUp
                    </Button>
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;