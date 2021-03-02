import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AlmaraiBold from '../FontedText/AlmaraiBold'


const SignInWith = (props) => {

    const {
        onFaceBookPress,
        onTwterPress,
        onGooglePress,
        containerStyle
    } = props

    return (
        <View style={[styles.container, containerStyle]}>

            <TouchableOpacity
                style={styles.Button}
                onPress={() => { onTwterPress && onTwterPress() }}
            >
                <AlmaraiBold style={styles.fontStyle}>
                    تويتر
                </AlmaraiBold>

                <Image
                    source={require('./../../assets/images/socialLogo/twter.png')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.Button}
                onPress={() => { onGooglePress && onGooglePress() }}
            >
                <AlmaraiBold style={styles.fontStyle}>
                    جوجل
                </AlmaraiBold>

                <Image
                    source={require('./../../assets/images/socialLogo/Google.png')}
                    style={styles.image}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.Button}
                onPress={() => { onFaceBookPress && onFaceBookPress() }}
            >
                <AlmaraiBold
                    style={styles.fontStyle}>
                    فيسبوك
                </AlmaraiBold>

                <Image
                    source={require('./../../assets/images/socialLogo/facbook.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    Button: {
        backgroundColor: '#572864',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 3,
        padding: 10,
        flex: 0.3
    },
    image: {
        width: 22,
        height: 23,
        margin: 5
    },
    fontStyle: {
        color: 'white',
        fontSize: 14,
        margin: 3
    }
})
export default SignInWith;