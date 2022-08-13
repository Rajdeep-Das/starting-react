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
  const [filter, filterSet] = React.useState("");
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <input type="text" value={filter} onChange={(evt) => filterSet(evt.target.value)}/>
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
              .filter((pokemon)=>(pokemon.name.english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
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
