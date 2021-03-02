import React, { Children } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { FontNames } from './Fonts';

const AlmaraiRegular: React.FC<TextProps> = ({ style, ...restProps }) => {
    return (
        <Text style={[styles.AlmaraiRegular, style]}  {...restProps}/>
    )
}

const styles = StyleSheet.create({
    AlmaraiRegular: {
        fontFamily: FontNames.AlmaraiRegular
    }
})

export default AlmaraiRegular