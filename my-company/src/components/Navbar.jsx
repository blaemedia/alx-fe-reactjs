import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0d6efd", // blue navbar
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem"
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          margin: 0,
          padding: 0
        }}
      >
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link to="/About" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
        </li>
        <li>
          <Link to="/Services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
        </li>
        <li>
          <Link to="/Contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
