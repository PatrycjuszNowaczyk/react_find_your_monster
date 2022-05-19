import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Increment from "./components/Increment/Increment";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    const { monsters, searchQuery } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <React.StrictMode>
        <Header title="Find your monster" 
          handleChange={(e) => {
            this.setState({ searchQuery: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
        <Increment name="increment button"/>
      </React.StrictMode>
    );
  }
}
