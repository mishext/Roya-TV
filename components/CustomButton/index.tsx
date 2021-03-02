import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AlmaraiBold from '../FontedText/AlmaraiBold';

interface IProps {
    title: string,
    onPress: () => void,
    style?: object,
    disabled?: boolean
}

const CustomButton: React.FC<IProps> = (props) => {

    const { title, onPress, style, disabled } = props;

    return (
        <LinearGradient
            style={[styles.button, style]}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5, 0.8]}
            colors={['#852AA0', '#9D2A9A', '#B92A91']}
        >

            <TouchableOpacity style={styles.ButtonWord} onPress={onPress} disabled={disabled} >
                <AlmaraiBold style={[styles.buttonText, { opacity: disabled ? 0.5 : 1 }]}>{title}</AlmaraiBold>
            </TouchableOpacity>

        </LinearGradient>
    )

}

CustomButton.defaultProps = {
    disabled: false
}

export default CustomButton


const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        alignSelf: 'center',
        marginTop: 8,

    },
    ButtonWord: {
        marginTop: 14,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    }
})