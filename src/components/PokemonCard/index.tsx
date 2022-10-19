import { SetStateAction,Dispatch } from 'react';
import { IPokemonResult } from '../../services/getAllPokemon';
import { LinkStyled as Link } from './styles';

interface IPokemonCardProps {
  name: string;
}

const PokemonCard = ({ name }: IPokemonCardProps) => {
  return (
    <li>
      <Link to={`${name}`}>
        <span>{name}</span>
        <span>Ver</span>
      </Link>
    </li>
  )
}

export default PokemonCard