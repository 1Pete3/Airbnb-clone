import airbnbLogo from './images/airbnb 1.png';
function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="airbnb logo" className="nav--logo"></img>
    </nav>
  );
}
export default Navbar;
