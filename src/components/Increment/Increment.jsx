import React, { Component } from "react";

export default class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Patrycjusz",
      city: "Poznań"
    };
  }
  handleClick = (e) => {
    if (e.target.name === "increment") {
      this.setState(
        (prevState) => ({
          count: prevState.count + 1,
        }),
        () => {
          console.log(this.state);
        }
      );
      return;
    }
    if (e.target.name === "decrement") {
      this.setState({count: this.state.count - 1}, () => {
          console.log(this);
        });
      return;
    }
  };
  render() {
    const { count } = this.state;
    return (
      <div className="bg-lime-600 p-8 flex flex-wrap justify-center">
        <h1 className="text-2xl text-center w-[100%] mb-4">
          button has been clicked {count} times
        </h1>
        <button
          className="bg-slate-800 hover:bg-lime-800 text-white p-4 rounded-lg mx-2"
          onClick={this.handleClick}
          name="increment"
        >
          {this.props.name}
        </button>
        <button
          className="bg-slate-800 hover:bg-lime-800 text-white p-4 rounded-lg mx-2"
          onClick={this.handleClick}
          name="decrement"
        >
          decrement button
        </button>
      </div>
    );
  }
}
