import styles from './PokemonCard.module.css';

function PokemonCard({ pokemon }) {
  const image =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default ||
    '';

  return (
    <div className={styles.card}>
      <h2 className={styles.pokemonName}>{pokemon.name}</h2>
      <img src={image} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;
