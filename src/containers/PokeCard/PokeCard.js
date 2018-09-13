import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokeCard.css';

class PokeCard extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      currentView: '',
      normal: 0,
      fighting: 1,
      flying: 2,
      poison: 3,
      ground: 4,
      rock: 5,
      bug: 6,
      ghost: 7,
      steel: 8,
      typeData: []
    };
  }

  fetchPokeTypeData = async pokemonArray => {
    const singleIds = pokemonArray.map(async id => {
      const url = `http://localhost:3001/pokemon/${id}`;
      const response = await fetch(url);
      const result = await response.json();

      return result;
    });
    return Promise.all(singleIds);
  };

  handleClick = async pokemonArray => {
    const fetchedData = await this.fetchPokeTypeData(pokemonArray);

    this.setState({ typeData: fetchedData });
  };

  render() {
    const pokemon = this.state.typeData.map(pokemon => (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight}</p>
        <img src={pokemon.sprites.front_default} />
      </div>
    ));
    return (
      <div
        className="poke-card"
        onClick={() =>
          this.setState(
            { toggle: !this.state.toggle, currentView: this.props.type },
            () =>
              this.handleClick(
                this.props.types[this.state[this.state.currentView]].pokemon
              )
          )
        }
      >
        <h2 className={this.state.toggle ? 'type-title' : ''}>
          {this.props.type}
        </h2>
        {this.state.toggle && <div>{pokemon}</div>}
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
