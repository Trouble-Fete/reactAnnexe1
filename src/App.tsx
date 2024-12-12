import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
		// imgSrc:
		// 	"https://th.bing.com/th?id=OIP.gmf81-NSyFWgZXDz3ejbHAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
	},
];

function App() {
	return (
		<div>
			<PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
			{/* <PokemonCard name={pokemonList[1].name} imgSrc={pokemonList[1].imgSrc} /> */}
		</div>
	);
}

export default App;
