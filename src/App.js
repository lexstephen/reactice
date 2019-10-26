import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "Toronto",
      word: "",
    };
  }

  componentDidMount() {
    this.fetchMyData();
  }

  async fetchMyData() {
    try {
      const apiData = await axios.get("https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?topics=food", {
        params: {
          apikey: "65ffg8hg7fgdh"
        }
      });
      const randomNumber = Math.floor(Math.random() * apiData.data.length);
      console.log("returned "  + randomNumber, apiData.data[randomNumber]);
      // Do whatever you need with your apiData! You'll often set it on your component state like so:
      this.setState({
        word: apiData.data[randomNumber].word
      });
    } catch(error) {
      // add error handling here
    }
  }

  render() {
return (
  <div id="la">bobob<pre>
  {this.state.word}
  </pre>
  </div>)
  }
}
export default App;
