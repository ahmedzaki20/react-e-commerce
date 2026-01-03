import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./dropDown";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/slices/profile";
import { Figure } from "react-bootstrap";

function Navhead() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(profile);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="position-fixed w-100"
        style={{ zIndex: 10 }}
        expand="md"
      >
        <Container>
          <Link className="navbar-brand" to="/">
            Shopping App
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {profile.length ? (
                <>
                  <Link>
                    {profile[0].image && (
                      <Figure className="" style={{ margin: 5, padding: 0 }}>
                        <Figure.Image
                          src={profile[0].image}
                          roundedCircle
                          style={{ margin: 5, padding: 0, height: "26px" }}
                        />
                      </Figure>
                    )}
                  </Link>
                  <Link to={`/${profile[0].name}`} className="nav-link">
                    {profile[0].name}
                  </Link>
                  <Dropdown />
                  <Nav.Link href="#pricing">Favorit</Nav.Link>
                  <a
                    role="button"
                    className="nav-link"
                    onClick={() => {
                      dispatch(logOut());
                      navigate("/");
                    }}
                  >
                    sign out
                  </a>
                </>
              ) : (
                <>
                  <Link to="/sign-up" className="nav-link">
                    sign up
                  </Link>
                  <Link to="/log-in" className="nav-link">
                    log in
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navhead;
