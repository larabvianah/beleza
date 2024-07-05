export const fetchErrorDecorator = (fetchFunction, ...args) => {
    return async () => {
        try {
            return await fetchFunction(...args);
        } catch (error) {
            console.error(error);
            throw new Error('Aconteceu um erro ao buscar os dados. Tente novamente mais tarde.');
        }
    };
}