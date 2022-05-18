import React from "react";
import Button from "../Button/Button";

export default class ButtonList extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleOnClick2 = this.handleOnClick1.bind(this);
  }
  handleOnClick1() {
    this.setState({ count: this.state.count + 1 });
    setTimeout(() => {
      console.log(this.state.count);
      console.log(this);
    }, 50);
  }

  handleOnClick3 = () => {
    this.setState({ count: this.state.count + 1 });
    setTimeout(() => {
      console.log(this.state.count);
      console.log(this);
    }, 50);
  };
  render() {
    return (
      <div className="container mx-auto bg-blue-900 flex flex-wrap justify-center p-4 border-8 border-slate-400 mb-8">
        <h2 className="text-amber-300 text-center text-3xl w-[100%] mb-0">
          test 'this'
        </h2>
        <p className="w-[100%] text-center text-white mb-8">
          to test 'this' in a function, you need to bind it to the function
        </p>
        <Button
          handleOnClick={this.handleOnClick1}
          text="this.handleOnClick1"
        />
        <Button
          handleOnClick={this.handleOnClick2}
          text="this.handleOnClick2"
        />
        <Button
          handleOnClick={this.handleOnClick3}
          text="this.handleOnClick3"
        />
      </div>
    );
  }
}

// function handleOnClick1() {
//     console.log('Button clicked');
// }
// export default function ButtonList() {
//   return (
//     <div className='container mx-auto bg-blue-900 flex flex-wrap justify-center p-4 border-8 border-slate-400 mb-8'>
//     <h2 className='text-amber-300 text-center text-3xl w-[100%] mb-0'>
//         test 'this'
//     </h2>
//     <p className='w-[100%] text-center text-white mb-8'>
//         to test 'this' in a function, you need to bind it to the function
//     </p>
//         <Button handleOnClick={handleOnClick1} text="click 1" />
//         <Button text="click 2" />
//         <Button text="click 3" />
//         <Button text="click 4" />
//     </div>
//   )
// }
