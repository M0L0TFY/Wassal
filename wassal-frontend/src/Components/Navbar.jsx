import userIcon from "../assets/userIcon.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="/Profile">
        <img src={userIcon} alt="Profile" />
      </a>
    </nav>
  );
}
