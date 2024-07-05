import axios from 'axios';
// import { BASE_URL } from '../../.env'

const pokeApi = axios.create({
    baseURL: 'https://belezaapi.co/api/v2/'
});

export const api = {
    pokeApi
};