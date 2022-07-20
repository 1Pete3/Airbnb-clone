import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from '../src/data';
const cardData = data.map((x) => <Card key={x.key} x={x} />);
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardData}</section>
    </div>
  );
}

export default App;
