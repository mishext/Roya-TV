import React from 'react';
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import AlmaraiRegular from '../../components/FontedText/AlmaraiRegular';
import { getVersion } from 'react-native-device-info';
interface IProps {

}

const SplachScreen: React.FC<IProps> = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../assets/images/SplashScreen.png')} >

            <Image resizeMode='contain' source={require('../../assets/images/Logo.png')} />

            <AlmaraiRegular style={styles.text} >
                مشاهده مختلفه
            </AlmaraiRegular>

            <AlmaraiRegular style={styles.text} >
                علي قناه رؤيه
            </AlmaraiRegular>

            <Text style={[styles.text, { position: 'absolute', bottom: 20 }]} >
                {`Version : ${getVersion()}`}
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18, color: 'white', marginTop: 10
    },
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})

export default SplachScreen