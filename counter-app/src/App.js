import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      <h1>Counter-App</h1>
    </header>
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleCount = e => {
    let counter = e.target.value;
    this.setState({ counter });
    console.log(this.state);
  };
  
  handleClickPlus = e => {
    e.preventDefault();
    let counter = this.state.counter
    counter++
    this.setState({ counter });
  };

  handleClickMinus = e => {
    e.preventDefault();
    let counter = this.state.counter
    counter--
    this.setState({ counter });
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClickPlus}> + </button>
        <button onClick={this.handleClickMinus}> - </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
