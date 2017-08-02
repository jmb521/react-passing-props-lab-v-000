import React from 'react';

import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList';
import Filter from './Filter';

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

    render() {
      return(
        <div>
          <FruitBasket />
          <FilteredFruitList />
          <Filter />
        </div>

      )
    }
  }


export default App;
