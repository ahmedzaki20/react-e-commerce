import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dropdown() {
  const cartLength = useSelector((state) => state.cart);
  return (
    <>
      <div
        className="navbar-collapse position-relative"
        id="navbarNavDarkDropdown"
      >
        {cartLength.length ? (
          <span
            className="position-absolute text-light"
            style={{
              top: "-11%",
              left: "19%",
              transform: " translate(0%,0%)",
              fontSize: " 13px",
              display: "block",
            }}
          >
            {cartLength.length}
          </span>
        ) : null}
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className="text-light dropdown-toggle btn btn-link"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ border: "none", background: "none" }}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <div
                  className="dropdown-item d-flex justify-content-between"
                  style={{ fontSize: "10px" }}
                >
                  <span>Name</span>
                  <span>Quantity</span>
                </div>
              </li>
              {cartLength.map((product) => {
                return (
                  <li key={product.id}>
                    <div
                      className="dropdown-item d-flex justify-content-between"
                      style={{ fontSize: "10px" }}
                    >
                      <span>{product.title.slice(0, 20)}... </span>
                      <span>{product.qty}</span>
                    </div>
                  </li>
                );
              })}
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/cart">
                  View All
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Dropdown;
