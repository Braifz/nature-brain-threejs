import "./Header.css";

const Header = ({ title, text }) => {
  return (
    <header className="header-bg">
      <div className="header-info">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
};

export default Header;
