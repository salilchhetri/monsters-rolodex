import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list";
import { Search } from './components/search/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchParam: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => { this.setState({ monsters: json }) });
  }

  handleChange = (e) => {
    this.setState({ searchParam: e.target.value });
  }

  render() {
    const { monsters, searchParam } = this.state;
    let filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchParam.toLocaleLowerCase())
    )

    return (
      <div className="App">
        <h1>Monstors Rolodex</h1>
        <Search placeholder="Search monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
