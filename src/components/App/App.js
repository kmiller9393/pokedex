import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { connect } from 'react-redux';
import { populatePage } from '../../actions';
import { fetchPokeData } from '../../apiCalls';

class App extends Component {
  async componentDidMount() {
    const pokeData = await fetchPokeData();
    this.props.populatePageData(pokeData);
  }

  render() {
    return (
      <div className="App">
        <h1 className="header"> POKéDEX </h1>
        {/* <FakeContainer /> */}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populatePageData: pokeData => dispatch(populatePage(pokeData))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
