import React, { Component } from 'react';
import { connect } from 'react-redux';
import { populatePage } from '../../actions';
import { fetchPokeData } from '../../apiCalls';
import Loading from '../Loading/Loading';
import PokeContainer from '../PokeContainer/PokeContainer';

import './App.css';

class App extends Component {
  async componentDidMount() {
    const pokeData = await fetchPokeData();
    this.props.populatePageData(pokeData);
  }

  render() {
    return (
      <div className="App">
        {this.props.types.length && <h1 className="header"> POKéDEX </h1>}
        <Loading />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populatePageData: pokeData => dispatch(populatePage(pokeData))
});

export const mapStateToProps = state => ({
  types: state.types
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
