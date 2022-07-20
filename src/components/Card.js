import star from './images/Star 1.png';

function Card(props) {
  let badgeText;
  if (props.x.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.x.location === 'Online') {
    badgeText = 'Online';
  } else {
    badgeText = '';
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.x.coverImg} alt="pic" className="card--image"></img>
      <div className="card--stats">
        <img src={star} alt="Star pic" className="card--star" />
        <span>{props.x.stats.rating}</span>
        <span className="gray">({props.x.stats.reviewCount}) • </span>
        <span className="gray">{props.x.location}</span>
      </div>
      <p className="card--title">{props.x.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.x.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
