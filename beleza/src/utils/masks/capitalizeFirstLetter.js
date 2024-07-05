export function capitalizeFirstLetter(str) {
    if (!str)
        return

    const words = str.split(' ')

    const capitalizedWords = words.map(word => {
        return word === 'de' ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    return capitalizedWords.join(' ')
}
