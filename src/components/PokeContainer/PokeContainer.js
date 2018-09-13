import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokeCard from '../PokeCard/PokeCard';
import './PokeContainer.css';

class PokeContainer extends Component {
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

export default connect(
  mapStateToProps,
  null
)(PokeContainer);
