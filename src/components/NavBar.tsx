interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<nav className="navbar">
			{/* permet de creer une liste de bouton pour changer de pokemon et d'image a chaque fois que je click */}
			{pokemonList.map((pokemon, index) => (
				<button
					className="button"
					type="button"
					key={pokemon.name}
					onClick={() => setPokemonIndex(index)}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}

// const NavBar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList }) => {
// 	return (
// 		<nav className="navbar">
// 			{pokemonList.map((pokemon, index) => (
// 				<button
// 					className="button"
// 					type="button"
// 					key={pokemon.name}
// 					onClick={() => setPokemonIndex(index)}
// 				>
// 					{pokemon.name}
// 				</button>
// 			))}
// 		</nav>
// 	);
// };

export default NavBar;
