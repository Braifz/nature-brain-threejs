import "./Header.css";

const Header = ({ title, text }) => {
  return (
    <header className="header-bg">
      <h1>{title}</h1>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
