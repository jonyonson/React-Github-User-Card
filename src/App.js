import React from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let username = 'jonyonson';

    axios
      .all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/followers`),
      ])
      .then(
        axios.spread((user, followers) => {
          const data = [user.data, ...followers.data];
          this.setState({ data });
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.data.map(x => {
          const { id, name, login, avatar_url } = x;
          return (
            <Card key={id} name={name} username={login} imageUrl={avatar_url} />
          );
        })}
      </div>
    );
  }
}

export default App;
