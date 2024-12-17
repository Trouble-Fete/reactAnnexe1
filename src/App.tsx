import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MyTitle from "./components/MyTitle";

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
		imgSrc: "/src/assets/Mew-11.webp",
		type: "Psychic",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);

	return (
		<div className="page">
			<MyTitle />
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
