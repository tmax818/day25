import React, { Component } from 'react';
import './App.css';

//Components
import Quote from './components/Quote';
import Footer from './components/Footer';

class App extends Component {
  state = { quote: '' };

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = async () => {
    let num = Math.floor(Math.random() * 100);
    console.log(num);
    let res = await fetch(
      `https://intense-retreat-39884.herokuapp.com/quotes/${num}`
    );
    let data = await res.json();
    console.log(data);
    this.setState({ quote: data.quote });
  };
  render() {
    return (
      <div className="App">
        <Quote quote={this.state.quote} getQuotes={this.getQuotes} />
        <Footer />
      </div>
    );
  }
}

export default App;
