import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading';
import PokeContainer from '../PokeContainer/PokeContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.types.length && <h1 className="header"> POKéDEX </h1>}
        <Loading />
        <PokeContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  types: state.types
});

export default connect(
  mapStateToProps,
  null
)(App);
