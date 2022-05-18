export default function Button(props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={props.handleOnClick}>{props.text}</button>
  )
}