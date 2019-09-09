import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Player extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      score: this.props.score
    }

    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
  }

  incrementScore(event) {
      this.setState({
        score: this.state.score + 10
      }
    )
  }

  decrementScore(event) {
      this.setState({
        score: this.state.score - 10
      }
    )
  }


  render(){
    const styles ={
      player: {
        display: "flex",
        padding: 20,

      },
      name: {
        flex: 1
      },
      button: {
        padding: 10,
        variant: "contained"
      },
      playerscore: {
        width: 200
      },
      score: {
        padding: 20
      }
    }
    return (
      <div style={styles.player}>
        <div style={styles.name}>
          {this.props.name}
        </div>
        <div style={styles.playerscore}>
          <button onClick={this.decrementScore} style={styles.button}>-</button>
          <span style={styles.score}>{this.state.score}</span>
          <button onClick={this.incrementScore} style={styles.button}>+</button>
        </div>
      </div>
    )
  }
}

export default Player
