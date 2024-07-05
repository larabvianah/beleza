import { api } from "../../api/beleza";

const getBeleza = async () => {
    const response = await api.pokeApi.get(`/beleza`);
    return response.data;
}

const getBelezaById = async (id) => {
    const response = await api.pokeApi.get(`/beleza/${id}`);
    return response.data;
}

export const belezaService = {
    getBeleza,
    getBelezaById
}