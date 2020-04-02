import React from 'react';

import './App.css';

class App extends React.Component {
  // constructor() {
    state = {
      value: 0,
      min: 0
 
    };
  // }
handleIncrement= () => {
  this.setState({
     value: this.state.value + 1
  });
  console.log("+")
};
handleDecrement= () => {
  this.setState({
    value: this.state.value - 1
 });
  console.log("-")

};


render() {
    return (
      <div className="container">
        <h2>{this.state.value}</h2>
        <div className="buttons">
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
}
};

export default App;