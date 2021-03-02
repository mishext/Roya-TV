import * as React from 'react';
import { FlatList, FlatListProps, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AlmaraiRegular from '../../../components/FontedText/AlmaraiRegular';
import { IStory } from './types';

interface StoriesListProps {
    data: IStory[]
}

const StoriesList: React.FC<StoriesListProps> = ({ data, ...restProps }) => {

    const notSeenColors = ['#E927B3', '#7A2964']
    const seenColors = ['#3E3F40', '#3E3F40']

    const _renderItem: ListRenderItem<IStory> = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {

                        // const passingProps = {
                        //     currentStory: item,
                        //     index,
                        //     allStories: items
                        // }

                    }}
                >

                    <LinearGradient
                        start={{ x: 88.0723741, y: -6.15505642 }}
                        end={{ x: 4.89366319, y: 129.307726 }}
                        style={Styles.seenCircle}
                        colors={item.seen ? seenColors : notSeenColors}
                    >

                        <View style={[Styles.storyBorderContainer, { backgroundColor: '#181E24' }]}>
                            <Image style={Styles.storyImage} source={{ uri: item.uri }} />
                        </View>

                    </LinearGradient>

                </TouchableOpacity>

                <AlmaraiRegular style={Styles.title} >
                    {item.title}
                </AlmaraiRegular>

            </View>
        )
    }

    const _keyExtractor = (item: IStory, index: number) => String(index)

    return (
        <FlatList
            renderItem={_renderItem}
            data={data}
            keyExtractor={_keyExtractor}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            {...restProps}
        />
    );

}

const Styles = StyleSheet.create({
    seenCircle: {
        borderRadius: (36),
        height: (72),
        width: (72),
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyBorderContainer: {
        height: (70),
        width: (70),
        borderRadius: (35),
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyImage: {
        height: (60),
        width: (60),
        borderRadius: (30),
    },
    title: {
        color: '#8E929A',
        fontSize: (10),
        textAlign: 'center',
        maxWidth: (72),
        marginTop: (5),
    }

})

export default StoriesList
