import React from 'react';
import ReactDOM from 'react-dom';
import Player from "./Player.js"

class Players extends React.Component {
  render() {
    return (
        <div>
          {this.props.member.map( (player) =>
            <Player key={player.id} name={player.name} score={player.score} />
          )}
        </div>

    )
  }
}
export default Players
