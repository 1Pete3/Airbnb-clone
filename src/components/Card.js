import star from './images/Star 1.png';
function Card(props) {
  return (
    <div className="Card">
      <img src={props.coverImg} alt="pic" className="card--image"></img>
      <div className="card--stats">
        <img src={star} alt="Star pic" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
