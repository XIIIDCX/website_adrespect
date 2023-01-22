import "./Footer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import images from "../constants/images";

const Footer = () => {
  const Links = [
    { name: "Link", link: "/" },
    { name: "Link", link: "/" },
    { name: "Link", link: "/" },
    { name: "Link", link: "/" },
    { name: "Link", link: "/" },
  ];

  return (
    <div id="footer">
      <Navbar
        expand="lg"
        className="d-flex align-items-start mt-5 pt-5"
        variant="dark"
      >
        <Container>
          <a className="navbar-brand" href="#1">
            <img
              src={images.logo_w}
              className="ms-5"
              alt="adrespect"
              id="logo"
            />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* LINKS */}
              <div className="d-flex align-items-center mr-5">
                {Links.map((link) => (
                  <>
                    <Nav.Link
                      id="nav_link_footer"
                      className="show_arrow_down ml-3 ml-sm-5"
                      href={link.link}
                      key={link.index}
                    >
                      {link.name}
                    </Nav.Link>
                    <div className="arrow_down_footer">
                      <IoIosArrowDown />
                    </div>
                  </>
                ))}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <p id="footer_txt">© 2019 Fabrx</p>
      </Navbar>
    </div>
  );
};

export default Footer;
