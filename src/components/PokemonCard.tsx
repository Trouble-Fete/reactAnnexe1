interface Pokemon {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: Pokemon) {
	return (
		<figure className="card">
			{imgSrc ? (
				<img src={imgSrc} alt={name} className="card-img" />
			) : (
				<p>???</p>
			)}
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
