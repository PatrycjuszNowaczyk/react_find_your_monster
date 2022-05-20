import React, { Component } from "react";

export default class ShowText extends Component {
  render() {
    return (
      <div>
        <div className="w-[100%] flex justify-center">
          <button
            className="bg-slate-700 hover:bg-slate-900 text-white p-4 rounded-lg"
            name="addText"
            onClick={this.props.handleOnClick}
          >
            add text
          </button>
        </div>
        {this.props.text}
      </div>
    );
  }
}
