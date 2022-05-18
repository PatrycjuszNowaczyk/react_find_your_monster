import Card from "../Card/Card";

function renderCards(monsters) {
  if(monsters.length > 0) {
    return monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />
    })
  }
  else{
    return <h1 className="text-center text-white font-bold text-4xl">No monsters found</h1>
  }
}
export default function CardList(props) {
  return (
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 p-5 gap-5 bg-cyan-900">
      { renderCards(props.monsters)}
    </div>
  );
}