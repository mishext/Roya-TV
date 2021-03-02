import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import AlmaraiBold from '../../components/FontedText/AlmaraiBold';
import AlmaraiRegular from '../../components/FontedText/AlmaraiRegular';
import OtpInput from '../../components/OtpInput/index';
import { mediumPagePadding, screenHeight } from '../../constants/style';

export default function OtpInsert({ route }) {

    const navigation = useNavigation()
    const { phone } = route.params;
    return (

        <ImageBackground style={styles.bgImage} source={require('../../assets/images/WelcomBG.png')}>

            <CustomHeader
                onPressForward={() => { navigation.goBack() }}
                onPressClose={() => { }}
                xButton
                forwardButton
            />

            <ScrollView contentContainerStyle={{ paddingTop: (screenHeight / 3) - 40, paddingHorizontal: mediumPagePadding }} >

                <View style={styles.textView}>
                    <AlmaraiBold style={styles.text}>ستصلك رسالة رمز التفعيل على</AlmaraiBold>
                    <AlmaraiBold style={styles.text}>.هذا الرقم لاتمام عملية التسجيل</AlmaraiBold>
                    <AlmaraiBold style={styles.number}>{phone}</AlmaraiBold>
                </View>

                <OtpInput />

                <CustomButton title="تحقيق" onPress={() => { navigation.navigate('RegInfoScreen',{  }) }} />

                <TouchableOpacity style={styles.resendButton}>
                    <AlmaraiBold style={styles.resendText}>اعادة ارسال رمز التفعيل</AlmaraiBold>
                </TouchableOpacity>

            </ScrollView>

            <View style={styles.policyView}>

                <AlmaraiRegular style={styles.policyText}>بالتسجيل ، أنت توافق على</AlmaraiRegular>

                <View style={styles.UnderPolicy}>
                    <TouchableOpacity >
                        <AlmaraiRegular style={styles.policyText2}>سياسة الخصوصية</AlmaraiRegular>
                    </TouchableOpacity>

                    <AlmaraiRegular style={styles.policyText}>  و  </AlmaraiRegular>

                    <TouchableOpacity>
                        <AlmaraiRegular style={styles.policyText2}>شروط الاستخدام</AlmaraiRegular>
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>


    )
}


const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },

    text: {
        fontSize: 20,
        color: 'white',

    },
    number: {
        fontSize: 20,
        color: '#E927B3',
        marginTop: 10
    },
    textView: {
        alignItems: 'flex-end'
    },
    resendButton: {
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 12

    },
    resendText: {
        fontSize: 12,
        color: 'white',

    },
    policyView: {
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 30,

        // flex: 1
    },
    policyText: {
        color: "#988FAC",
        fontSize: 12,
    },
    UnderPolicy: {
        flexDirection: 'row'
    },
    policyText2: {
        color: "#FFFFFF",
        fontSize: 12,
    }


})