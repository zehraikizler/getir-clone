import cards from "api/cards.json";
import CardItem from "components/ui/CardItem";

export default function Cards() {
  return (
    <div>
      <div className="container mx-auto my-4 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, key) => (
          <CardItem key={key} card={card} />
        ))}
      </div>
    </div>
  );
}
