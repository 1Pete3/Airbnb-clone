import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from '../src/data';
const cardData = data.map((x) => (
  <Card
    title={x.title}
    price={x.price}
    rating={x.stats.rating}
    reviewCount={x.stats.reviewCount}
    coverImg={x.coverImg}
    location={x.location}
  />
));
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cardList">{cardData}</section>
    </div>
  );
}

export default App;
