import { ActivityIndicator, MD2Colors, Searchbar, Chip, Card as PaperCard, Text as PaperText } from "react-native-paper";
import { Container, Section, Stack } from "./../styles/components";
import usePokemons from "./../hooks/queries/pokemons/index";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import { pokemonService } from "./../services/pokemons/index";
import { capitalizeFirstLetter } from "./../utils/masks/capitalizeFirstLetter";
import { StyleSheet, Text, View, Button, Dimensions, Image, ImageBackground } from 'react-native';
import Card, { ITEM_WIDTH, SLIDER_WIDTH } from './../components/card';
import { getColorByType } from "../utils/colors/getColorType";



const useFilterData = (searchQuery, initialData, key) => {
    if (!searchQuery) {
        return { filteredData: initialData };
    }

    const filteredData = [];
    initialData?.forEach((item) => {
        if (String(item[key]).toLowerCase().includes(searchQuery.toLowerCase())) {
            filteredData.push(item);
        }
    });

    return { filteredData };
}


const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const deferredValue = useDeferredValue(searchQuery);
    const { data: idPokemons, isLoadingIdPokemons } = usePokemons(undefined, undefined, {
        select: (data) => data.results.map(({ url }) => {
            return {
                id: url?.split('/')[6]
            }
        })
    });
    const allPokemons = useMemo(() => {
        let selectedData = [];
        idPokemons?.map(async ({ id }) => {
            const resPromise = await pokemonService.getPokemonById(id);
            selectedData.push({
                ...resPromise,
                url_image: resPromise.sprites.other['official-artwork'].front_default
            });
        });

        return selectedData;

    }, [idPokemons]);
    const { filteredData } = useFilterData(deferredValue, allPokemons, 'name');

    return (
        <Container>
            <Section>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{
                        width: '100%',
                    }}
                />
                <Stack
                    style={{
                        width: '100%',
                        flexDirection: 'column',
                        marginTop: '1em'
                    }}
                >
                    <Suspense fallback={
                        <Container>
                            <ActivityIndicator animating={true} color={MD2Colors.red800} />
                        </Container>
                    }>
                        <Stack
                            style={{
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '100%'
                            }}
                        >
                            {
                                filteredData?.map(({ id, name, base_experience, types, url_image }) => (
                                    <Card
                                        key={id}
                                        name={name}
                                        level={base_experience}
                                        image={url_image}
                                        type={types[0].type.name}
                                        style={{
                                            width: '47%',
                                            height: '190px',
                                            margin: '1.5%',
                                            backgroundColor: getColorByType(types[0].type.name),
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    />
                                ))
                            }
                        </Stack>
                    </Suspense>
                </Stack>
            </Section>
        </Container>
    );
}

export default Search;