import { Navigate, Route, Routes } from "react-router-dom";
import PokemonItem from "../components/PokemonItem";
import Home from "../pages/Home";

const RoutesMain = () => (
  <Routes>
    <Route path="/pokemons" element={<Home />} >
      <Route path=":name" element={<PokemonItem />} />
      <Route path="new" element={<h1>Abacaxi</h1>}/>
    </Route>
    <Route path="*" element={<Navigate to='/pokemons' />} />
  </Routes>
);

export default RoutesMain;