import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName, IPokemon } from "../../services/getPokemonByName";
import { Container } from "./styles";

const PokemonItem = () => {
  const [currentPokemon, setCurrentPokemon] = useState<IPokemon | null>(null);

  const { name } = useParams();

  useEffect(() => {
    async function getPokemon() {
      try {
        const data = await getPokemonByName(name);
        setCurrentPokemon(data);
      } catch (error) {
        console.error(error)
      }
    }

    getPokemon();
  }, [name])

  if (!currentPokemon) {
    return null;
  }

  return (
    <Container>
      <img
        src={currentPokemon.sprites.front_default || undefined}
        alt={currentPokemon.name}
      />
      <span>{currentPokemon.name}</span>
    </Container>
  );
};

export default PokemonItem;
