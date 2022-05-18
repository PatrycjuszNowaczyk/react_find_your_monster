import SearchBox from "../SearchBox/SearchBox";
export default function Header(props) {
  return (
    <div className="p-4 bg-lime-700">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-yellow-600 p-4 text-stroke-yellow-400 text-stroke-2 lg:text-stroke-4 selection:bg-cyan-900">
        {props.title}
      </h1>
      <SearchBox placeholder="Search monster" handleChange={props.handleChange}/>
    </div>
  );
}
