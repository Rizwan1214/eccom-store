import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Navbar, Col } from "react-bootstrap";
import Logo from "../assets/images/ecomm-logo.png";
import { search } from "../Context";

const Header = (props) => {
  const searchFunc = (e) => {
    searchDataValue.setSearchValue(e.target.value.toLowerCase());
  };
  const searchDataValue = useContext(search);

  console.log(searchDataValue);
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "9",
      }}
    >
      <Navbar expand="lg" className="bg-success">
        <Container>
          <Col lg="8">
            <ul className="d-flex align-items-center list-unstyled gap-5 mb-0">
              <li>
                <Link to="/" className="text-decoration-none">
                  <img
                    src={Logo}
                    alt="Logo"
                    width="100"
                    className="rounded-circle"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-decoration-none text-white"
                >
                  <b>Collection</b>
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-decoration-none text-white">
                  <b>Product</b>
                </Link>
              </li>
              <li>
                <Form>
                  <Form.Control
                    onChange={searchFunc}
                    value={searchDataValue.searchValue}
                    name="search"
                    type="search"
                    placeholder="Search"
                  />
                </Form>
              </li>
            </ul>
          </Col>
          <Col lg="4">
            <ul className="d-flex align-items-center justify-content-end list-unstyled gap-5 mb-0">
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  <b>About</b>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-white">
                  <b>Contact</b>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-decoration-none text-white">
                  <b>Cart</b>
                </Link>
              </li>
            </ul>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
