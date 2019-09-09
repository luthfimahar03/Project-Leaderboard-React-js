import React from 'react';
import ReactDOM from 'react-dom';
import Players from "./Players.js"
import AddPlayer from "./AddPlayer.js"


class Leaderboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      members: [
        {id: 1, name: "Ahmad Luthfi Mahar", score: 25},
        {id: 2, name: "Rifat Majdi Mahar", score: 10},
        {id: 3, name: "Muhammad Haris", score: 30},
      ]
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }

  onPlayerAdd(name){
    let new_members = this.state.members
    new_members.push({id: new_members.length + 1, name: name, score: 10})
    this.setState({
      members: new_members
    })
  }

  render() {
    const styles = {
      container: {
        padding: 60
      }
    }
    
    return (
      <div style={styles.container}>
        <h1> Leaderboard </h1>
        <Players member={ this.state.members } />
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    )
  }
}

export default Leaderboard
