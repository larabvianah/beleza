import { api } from "../../api/beleza";

const getTypeBeleza = async (type) => {
    const response = await api.pokeApi.get(`/type/${type}`);
    return response.data;
}

export const typePokemonService = {
    getTypeBeleza
}