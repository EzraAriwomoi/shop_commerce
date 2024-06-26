import "../../css/layoutcss/layout.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <span>KLETOS</span>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Product</a>
        </li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>My profile</li>
        <button>
          <a href="/auth">Sign In</a>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
