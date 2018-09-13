import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokeCard.css';

class PokeCard extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  fetchPokeTypeData = async pokemonArray => {
    console.log(pokemonArray);
    pokemonArray.map(id => {
      const singleIds = id.map(async id => {
        const url = `http://localhost:3001/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        return result;
      });
      return Promise.all(singleIds);
    });
  };

  render() {
    const pokemonArray = this.props.types.map(type => type.pokemon);
    console.log(pokemonArray);
    return (
      <div
        className="poke-card"
        onClick={() =>
          this.setState({ toggle: !this.state.toggle }, () =>
            this.fetchPokeTypeData(pokemonArray)
          )
        }
      >
        <h2>{this.props.type}</h2>
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
)(PokeCard);
