import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AlmaraiBold from '../../components/FontedText/AlmaraiBold';
import AlmaraiRegular from '../../components/FontedText/AlmaraiRegular';
import HeaderOptions from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const interesting = [
    { id: 0, name: "أفلام", isVailed: false },
    { id: 1, name: "كوميديا", isVailed: false },
    { id: 2, name: "مسرحيات", isVailed: false },
    { id: 3, name: "طبخ", isVailed: false },
    { id: 4, name: "منوعات", isVailed: false },
    { id: 5, name: "موسيقى", isVailed: false },
    { id: 6, name: "أطفال", isVailed: false },
    { id: 7, name: "لايف ستايل", isVailed: false },
    { id: 8, name: "وثائقى", isVailed: false }
];


const InterestList = () => {

    const [interestingData, setInterestingData] = useState(interesting);

    const toggleSelect = (id) => {

        const toggledData = interestingData.map(item => {

            if (item.id == id) {
                return {
                    ...item,
                    isVailed: !item.isVailed
                }
            } else {
                return {
                    ...item
                }
            }
        })

        setInterestingData(toggledData)

    }



    const renderCart = ({ item }) => { // cahnge this to Arrow function and call it rendeCart (Clean Code)
        return (
            <View style={styles.CardContainer}>

                <TouchableOpacity style={styles.InterestCardView} onPress={() => toggleSelect(item.id)}>
                    <AlmaraiBold style={styles.interestName}>{item.name}</AlmaraiBold>
                </TouchableOpacity>

                {item.isVailed ?
                    <Icon color="white" size={29} name="check" style={styles.Icon}></Icon>
                    :
                    null}

            </View >
        )
    }

    return (
        <View style={styles.container}>

            <HeaderOptions SecondOption />

            <View style={styles.underHeadertexts}>
                <AlmaraiBold style={styles.wlcText}>مرحبا بك، فارس</AlmaraiBold>
                <AlmaraiRegular style={styles.chosText}>اختر الاقسام التى تهتم بمشاهدتها حتى نتمكن من</AlmaraiRegular>
                <AlmaraiRegular style={styles.chosText}>إنشاء  تجربة مخصصة لك.</AlmaraiRegular>
            </View>

            <FlatList
                data={interestingData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCart} />

            <CustomButton title="تطبيق" onPress={() => {

                // el selected dah hwa ely hytba3t ll back end ana 3amelk log 
                const selected = interestingData.filter(item => item.isVailed == true)
                console.log(selected)

            }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#10151D',
        flex: 1
    },
    CardContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    InterestCardView: {
        width: 393,
        height: 50,
        borderRadius: 3,
        backgroundColor: "#262835",
        alignContent: 'center',
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10
    },
    interestName: {
        fontSize: 14,
        color: 'white',
        right: 15
    },
    underHeadertexts: {
        padding: 20,
        alignItems: 'flex-end',
    },
    wlcText: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 8
    },
    chosText: {
        color: 'white',
        fontSize: 16,
    },
    Icon: {
        position: 'absolute',
        alignSelf: 'center',
        paddingLeft: 30
    }
})

export default InterestList;