import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AlmaraiBold from '../FontedText/AlmaraiBold'
import AlmaraiRegular from '../FontedText/AlmaraiRegular'
import Icon from 'react-native-vector-icons/Ionicons'



const HorizontalList = (props) => {

    const { data, mainText, iconOnPress } = props;

    const renderCard = ({ item }) => {
        return (
            <View style={styles.renderCardContainer}>
                <Image source={item.photo} style={styles.photo} />
                <AlmaraiRegular style={styles.movieName}>{item.name}</AlmaraiRegular>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <View style={styles.mainHeader}>
                <TouchableOpacity onPress={iconOnPress}>
                    <Icon color="black" size={30} name="chevron-back"></Icon>
                </TouchableOpacity>
                <AlmaraiBold style={styles.mainText}>{mainText}</AlmaraiBold>
            </View>
        )
    }

    return (

        <View>

            {renderHeader()}

            <View style={styles.flatListContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCard}
                    contentContainerStyle={styles.flaatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {

    },
    mainText: {
        fontSize: 14,
        color: 'black',
        marginBottom: 12
    },
    photo: {
        width: 107,
        height: 159
    },
    movieName: {
        fontSize: 12,
        color: 'black'
    },
    renderCardContainer: {
        margin: 2,
    },
    mainHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flatListContainer: {
        alignItems: 'flex-end',
    },
    flaatList: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    }
})
export default HorizontalList;