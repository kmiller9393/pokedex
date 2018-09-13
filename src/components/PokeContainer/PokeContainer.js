import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokeCard from '../PokeCard/PokeCard';
import { populatePage } from '../../actions';
// import { fetchPokeData } from '../../apiCalls';
import './PokeContainer.css';

class PokeContainer extends Component {
  async componentDidMount() {
    const pokeData = await this.fetchPokeData();
    this.props.populatePageData(pokeData);
  }

  fetchPokeData = () => {
    const url = 'http://localhost:3001/types';
    return fetch(url)
      .then(response => response.json())
      .then(result => result);
  };

  render() {
    const { types } = this.props;
    const pokeCards = types.map((type, index) => (
      <PokeCard type={type.name} key={index} />
    ));
    return <div className="poke-container">{pokeCards}</div>;
  }
}

export const mapStateToProps = state => ({
  types: state.types
});

export const mapDispatchToProps = dispatch => ({
  populatePageData: pokeData => dispatch(populatePage(pokeData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeContainer);
