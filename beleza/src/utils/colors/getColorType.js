import { darken } from 'polished';

export const getColorByType = (type, isDark=false) => {
    const colors ={
        'normal': '#b8b8b8',
        'fire': '#F08030',
        'water': '#6890F0',
        'electric': '#F8D030',
        'grass': '#78C850',
        'ice': '#98D8D8',
        'fighting': '#C03028',
        'poison': '#A040A0',
        'ground': '#E0C068',
        'flying': '#A890F0',
        'psychic': '#f1948acf',
        'bug': '#A8B820',
        'rock': '#B8A038',
        'ghost': '#705898',
        'dragon': '#7038f88f',
        'steel': '#B8B8D0',
        'fairy': '#EE99AC',
        'dark': '#705848'
    }

    if (!colors[type]) {
        return '#000'
    }
    
    return isDark ? darken(0.1, colors[type]) : colors[type]
}