interface Pokemon {
	name: string;
	imgSrc?: string;
	type: string;
}

function PokemonCard({ name, imgSrc, type }: Pokemon) {
	return (
		<figure className={`card ${type}`}>
			{imgSrc ? (
				<img src={imgSrc} alt={name} className="card-img" />
			) : (
				<p>???</p>
			)}
			<figcaption>{name}</figcaption>
			<p>Type: {type}</p>
		</figure>
	);
}

export default PokemonCard;
