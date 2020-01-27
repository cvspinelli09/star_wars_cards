import React from 'react';

import './App.css';
import SearchBox from './components/searchbox/searchBox.component';
import CardList from './components/cardlist/cardList.component';
import Scroll from './components/scroll/scroll.component';
import { people } from './people';
 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: people,
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ people: people });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { people, searchfield } = this.state;
    const filteredPeople = people.filter(people => {
      return people.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !people.length ?
    <h1>Loading...</h1> : 
    (
      <div className='tc'>
        <h1>Star Wars API</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList people={filteredPeople} />
        </Scroll>
      </div>
    )
  };
}

export default App;
