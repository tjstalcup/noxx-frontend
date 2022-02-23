import "./App.css";
import React from 'react';
import config from './config';

/*

For this project, we’d love to see how you’d envision this core component of our platform.

**Users Should be Able To**

- View metadata and images of cards across a catalog
- Add a card to their collection
- Add a card to a wantlist, or a list of favorites
- View the cards that they have added to their collection and their wantlist/favorites page

**Requirements** 

- Build mock API using back-end technology of your choice
- Build a mock interface using React that satisfies the user facing requirements (this is what we use at Noxx for our front end)
- Submission runs without errors

*/

class App extends React.Component {
  state = {
    cards : []
  };

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/api/cards`,{
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    })
      .then(res=>res.json())
      .then(cards=>this.setState({cards}));
  }

  render() {
    const {cards} = this.state;
    return (
      <div className="App">
        <header>
          <h1>NoXX Code Challenge - Card Explorer</h1>
          <p>
            At NoXX, we enable users to discover new cards and assets that they
            may not have known about before. This enables them to find their
            next investment, or something interesting to add to their personal
            collection.
          </p>
        </header>

        <hr />

        <div className="card-catalog">
          <h2>Card Catalog ({cards.length})</h2>
          <ul>
            {cards.map(card=><li>
              <p>
                <span className="player-name">{card.player_name}</span>
                <span className="number">{card.card_number}</span>
              </p>
              <img src={card.image_url} width="100"/>
              <p>
                <span className="year">{card.year}</span>
                <span className="set">{card.set}</span>
              </p>
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;