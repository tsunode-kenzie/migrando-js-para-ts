import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";

import { List, ContainerButton } from "./styles";
import { getAllPokemon, IPokemonResult } from "../../services/getAllPokemon";

const Home = () => {
  const [pokemon, setPokemon] = useState<IPokemonResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setLoading(true);

    async function getPokemon() {
      try {
        const data = await getAllPokemon(151, Number(searchParams.get('page')) * 151);

        const { results, next, previous } = data;

        setPokemon(results);
        setIsNextDisabled(!next);
        setIsPreviousDisabled(!previous);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

    getPokemon();
  }, [searchParams]);

  return (
    <>
      <Header />
      <Container>
        <Outlet />

        <ContainerButton>
          <Button
            onClick={() => setSearchParams({ page:  Number(searchParams.get('page')) - 1 + '' })}
            disabled={isPreviousDisabled}
            backgroundColor="#f10"
          >
            Previous
          </Button>
          <Button
            onClick={() => setSearchParams({ page: Number(searchParams.get('page')) + 1 + '' })}
            disabled={isNextDisabled}
            backgroundColor="#f10"
          >
            Next
          </Button>
        </ContainerButton>

        {loading ? (
          <span>Carregando...</span>
        ) : (
          <List>
            {pokemon.map(({ name }) => (
              <PokemonCard key={name} name={name} />
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

export default Home;
