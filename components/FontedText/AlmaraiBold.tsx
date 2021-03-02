import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { FontNames } from './Fonts';

const AlmaraiBold: React.FC<TextProps> = ({ style, ...restProps }) => {
    return (
        <Text style={[styles.AlmaraiBold, style]}  {...restProps}/>
    )
}

const styles = StyleSheet.create({
    AlmaraiBold: {
        fontFamily: FontNames.AlmaraiBold
    }
})

export default AlmaraiBold