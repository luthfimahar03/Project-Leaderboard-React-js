import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class AddPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
    this.onPlayerChange = this.onPlayerChange.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
  }

  onPlayerChange(event){
    this.setState({
      name: event.target.value
    })
  }

  addPlayer(event){
    this.props.onAdd(this.state.name)
    this.setState({
      name: ""
    })
  }

    render(){
      const styles ={
        input: {
          flex: 1,
          paddingRight: 20,
          width: "45%",
          height: 27
        },
        button: {
          float: "right",
          marginRight: 80,
          width: 120,
          padding: 10,
          variant: "contained"

        },
        container: {
          padding: 23
        }
      }

      return(
        <div style={styles.container}>
          <input style={styles.input} onChange={this.onPlayerChange} type="text" value={this.state.name}  />
          <button style={styles.button} onClick={this.addPlayer}>Submit</button>
        </div>
      )
    }
}
export default AddPlayer
