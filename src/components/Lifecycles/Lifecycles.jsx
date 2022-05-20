import React, { Component } from "react";
import ShowText from "../ShowText/ShowText";
export default class Lifecycles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayChild: false,
      text: "initial text",
    };
  }
  handleOnClick = (e) => {
    if (e.target.name === "toggleChild") {
      this.setState(state => {
            return Object.assign({displayChild: !state.displayChild}, !state.displayChild ? state.text : {text: "initial text"});
      });
    } else if (e.target.name === "addText") {
      this.setState({ text: this.state.text + " added text" });
    }
  };
  render() {
    const { displayChild } = this.state;
    return (
      <div className="container mx-auto bg-cyan-300 p-8 mb-8 mt-4">
        <div className="flex flex-wrap justify-center">
          <div
            className={
              "w-[100%] flex justify-center " +
              (this.state.displayChild ? "mb-8" : "")
            }
          >
            <button
              className="bg-slate-700 hover:bg-slate-900 text-white p-4 rounded-lg"
              name="toggleChild"
              onClick={this.handleOnClick}
            >
              {displayChild ? "Hide Child" : "Show Child"}
            </button>

          </div>
          {this.state.displayChild ? <ShowText text={this.state.text} handleOnClick={this.handleOnClick} /> : null}
        </div>
      </div>
    );
  }
}
