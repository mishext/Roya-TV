import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontNames } from '../FontedText/Fonts';

export default function TextInputCard(props) {

    const { style, placeholder, secureTextEntry, onChange } = props;

    return (

        <View style={styles.container}>
            <TextInput
                style={[styles.textInput, style]}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChange={onChange}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex: 1
    },
    textInput: {
        width: 393,
        height: 50,
        backgroundColor: 'white',
        marginTop: 13,
        borderRadius: 3,
        textAlign: 'right',
        fontSize: 14,
        paddingRight: 17,
        fontFamily: FontNames.AlmaraiRegular
    }
})
