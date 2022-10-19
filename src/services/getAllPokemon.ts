import api from "./api";

export interface IPokemonResult {
  name: string;
  url: string;
}

interface IPokemonResponse {
  count: number ;
  next: string | null;
  previous: string | null;
  results: IPokemonResult[];
}

export async function getAllPokemon(
  limit: number,
  offset: number
): Promise<IPokemonResponse> {
  const { data } = await api.get<IPokemonResponse>(`pokemon`, {
    params: {
      limit,
      offset,
    },
  });

  return data;
}
