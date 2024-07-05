import { useQuery } from "react-query";
import { fetchErrorDecorator } from "../../../utils/errors/fetchErrorDecorator/index";
import { BelezaService } from '../../../services/belezas/index';

const usePokemons = (id, params, config ={}) => {
    return useQuery(
        ['pokemon', id],
        fetchErrorDecorator(async () => {
            if(id) {
                return await BelezaService.getBelezaById(id);
            }

            return BelezaService.getBeleza(params);
        }),
        {
            ...config,
            refetchOnWindowFocus: true,
        }
    );
};

export default usePokemons;