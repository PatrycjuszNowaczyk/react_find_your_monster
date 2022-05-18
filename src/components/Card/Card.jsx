export default function Card(props) {
  let { monster } = props;
  monster.image = `https://robohash.org/${monster.id}?set=set2&size=180x180`;
  return (
    <div className="flex flex-col flex-initial items-center bg-pink-700 rounded-3xl mx-auto p-4 px-8">
      <img className="" src={monster.image} alt={monster.name} />
      <h1 className="text-center text-blue-200 text-lg font-bold pt-4">{props.monster.name}</h1>
    </div>
  );
}