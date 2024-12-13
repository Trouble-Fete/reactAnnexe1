import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		type: "Grass",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		type: "Fire",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		type: "Water",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		type: "Electric",
	},
	{
		name: "mew",
		imgSrc: "/src/assets/Mew-11.jpeg",
		type: "Psychic",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div className="page">
			<NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
				type={pokemonList[pokemonIndex].type}
			/>
		</div>
	);
}
export default App;
