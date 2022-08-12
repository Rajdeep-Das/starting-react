import "./App.css";
import React from "react";
import pokemons from "./pokemon.json";
import PropTypes from "prop-types";

const PokemonRow  = ({pokemon}) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name:PropTypes.shape({
      english: PropTypes.string
    }),
    type : PropTypes.arrayOf(PropTypes.string)
  })
};


function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons
              .slice(0, 20)
              .map((pokemon) =>
                <PokemonRow key={pokemon.id} pokemon={pokemon}></PokemonRow>
                )
          }

        </tbody>
      </table>
    </div>
  );
}

export default App;
