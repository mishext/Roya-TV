import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AlmaraiBold from '../../components/FontedText/AlmaraiBold'

const CustomHeader = (props) => {

    const { onPressClose,
        onPressForward,
        onPressSkip,
        skipButton,
        xButton,
        forwardButton,
        label
    } = props;

    const forwardIcon = () => {
        return (
            <TouchableOpacity onPress={onPressForward}>
                <Icon color="white" size={30} name="chevron-forward"></Icon>
            </TouchableOpacity>
        )
    }
    const xIcon = () => {
        return (
            <TouchableOpacity onPress={onPressClose}>
                {
                    label ? label() : <Icon color="white" size={30} name="close"></Icon>
                }
            </TouchableOpacity>
        )
    }

    const skipIcon = () => {
        return (
            <TouchableOpacity onPress={onPressSkip}>
                <AlmaraiBold style={styles.fontStyle}>تخطى</AlmaraiBold>
            </TouchableOpacity>
        )
    }



    return (
        <View style={styles.Header}>
            {skipButton ? skipIcon() : null}
            {xButton ? xIcon() : null}
            {forwardButton ? forwardIcon() : null}

        </View>
    )
}


const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 8,
        padding: 7
    },
    fontStyle: {
        fontSize: 14,
        color: 'white'
    }
})

export default CustomHeader;