import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const handlePrevious = () => {
		setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
	};
	const handleNext = () => {
		setPokemonIndex((nextIndex) =>
			nextIndex < pokemonList.length - 1 ? nextIndex + 1 : nextIndex,
		);
	};
	// const nextClick = ();
	return (
		<div>
			<button type="button" onClick={handlePrevious}>
				Précédent
			</button>
			<button type="button" onClick={handleNext}>
				Suivant
			</button>

			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			{/* <PokemonCard name={pokemonList[1].name} imgSrc={pokemonList[1].imgSrc} /> */}
		</div>
	);
}
export default App;
