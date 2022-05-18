export default function SearchBox(props) {
  return (
    <input
      className="w-[100%] sm:w-[80%] md:w-[75%] lg:w-[50%] mx-auto block p-2 mb-4 text-center placeholder-white outline-purple-400 outline-0 focus-within:outline focus:outline-4 bg-yellow-600 focus:bg-slate-500  focus:placeholder-white focus:text-white"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
}