
import cardcss from './ComponentsCss/card.module.css';


function Card() {
    
  return (
    <div className={cardcss.card}>
      <img className={cardcss.cardImage} src="https://www.bing.com/th/id/OIP.G37tgeQqSNt7v2oPfj9ltQHaE7?w=166&h=180&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="This image" />
      <h2 className={cardcss.cardTitle}>Card Title</h2>
      <p className={cardcss.cardText}>This is a card component.</p>
    </div>
  );
}

export default Card;