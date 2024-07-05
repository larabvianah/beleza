import { Chip, IconButton, MD3Colors, Card as PaperCard, Text as PaperText } from 'react-native-paper';
import { getColorByType } from '../../utils/colors/getColorType';
import { capitalizeFirstLetter } from '../../utils/masks/capitalizeFirstLetter';
import { Dimensions } from 'react-native';
import { Stack } from '../../styles/components';
import { useState } from 'react';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const Card = (props) => {
    const { name, level, image, type, onFavorite, ...restProps } = props;
    const [isFavorite, setIsFavorite] = useState(false)
    const colorType = getColorByType(type, true);

    const handleSetFavorite = () => {
        onFavorite()
        setIsFavorite(!isFavorite)
    }

    return (
        <PaperCard
            contentStyle={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent:'space-between'
            }}
            {...restProps}
        >
            <PaperCard.Content
                style={{
                    width: '100%',
                    height: '20%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >
                <PaperText
                    variant="titleMedium"
                    style={{
                        color: 'white',
                        fontWeight: '500',
                    }}
                >
                    {level}
                </PaperText>
                <Stack>
                    {
                        type && (
                            <Chip
                                onPress={() => console.log('Pressed')}
                                style={{
                                    backgroundColor: colorType,
                                    border: '1px solid #00000069',
                                    height: '100%'
                                }}
                                textStyle={{
                                    color: 'white',
                                    lineHeight: 'normal',
                                    marginLeft: '5px',
                                    marginRight: '5px',
                                    marginTop: '4px',
                                    marginBottom: '5px',
                                    fontSize: '0.85em',
                                }}
                            >
                                {capitalizeFirstLetter(type)}
                            </Chip>
                        )
                    }
                </Stack>
            </PaperCard.Content>
            <PaperCard.Cover
                onError={(e) => { e.target.src = '../../../assets/image-null.png'; }}
                style={{
                    backgroundColor: 'transparent',
                    width: '60%',
                    height: '50%',
                }}
                srcSet='image'
                source={{ uri: image }}
                resizeMethod='resize'
                resizeMode='contain'
            />
            <PaperCard.Content
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20%',
                }}
            >
                <PaperText
                    variant="titleLarge"
                    style={{
                        color: 'white',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: '1em',
                    }}
                >
                    {capitalizeFirstLetter(name)}
                </PaperText>
            </PaperCard.Content>
        </PaperCard>
    )
}

export default Card;
