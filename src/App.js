import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//Components
import Quote from './components/Quote';
import Footer from './components/Footer';

class App extends Component {
  state = { quote: '', author: '' };

  componentDidMount() {
    this.fetchFacts();
  }

  fetchFacts = async () => {
    let num = Math.floor(Math.random() * 100);
    const res = await axios.get(
      `https://pacific-sierra-39339.herokuapp.com/api/facts/${num}`
    );
    console.log(res.data);
    this.setState({ quote: res.data.quote, author: res.data.author });
  };

  render() {
    return (
      <div className="App">
        <Quote
          quote={this.state.quote}
          author={this.state.author}
          fetchFacts={this.fetchFacts}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
