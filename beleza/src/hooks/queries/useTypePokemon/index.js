import { useQuery } from "react-query";
import { typePokemonService } from "../../../services/typesPokemons/index";
import { fetchErrorDecorator } from "../../../utils/errors/fetchErrorDecorator";

const useTypePokemon = (type, config ={}) => {
    return useQuery(
        ['typePokemon', type],
        fetchErrorDecorator(async () => {
            return typePokemonService.getTypePokemon(type);
        }),
        {
            ...config
        }
    );
};

export default useTypePokemon;