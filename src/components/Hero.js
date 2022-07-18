import collectionImage from './images/Group 77.png';
function Hero() {
  return (
    <div className="hero">
      <img src={collectionImage} alt="Collection" className="hero--photo"></img>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by
        <br />
        one-of-a-kind hosts—all without leaving
        <br />
        home.
      </p>
    </div>
  );
}
export default Hero;
