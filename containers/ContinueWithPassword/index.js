import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import PasswordInput from '../../components/PasswordInput';
import ButtonCard from '../../components/CustomButton';
import AlmaraiBold from '../../components/FontedText/AlmaraiBold';
import AlmaraiRegular from '../../components/FontedText/AlmaraiRegular';

const LoginPassword = () => {
    return (
        <ImageBackground style={styles.bgImage} source={require('../../assets/images/WelcomBG.png')}>
            <CustomHeader skipButton />

            <ScrollView contentContainerStyle={styles.container}>
                <AlmaraiBold style={styles.bigFont}>انت تمتلك حساب سابق.</AlmaraiBold>
                <AlmaraiRegular style={styles.smallFont}>الرجاء ادخال كلمة السر لمتابعة عملية التسجيل</AlmaraiRegular>

                <PasswordInput />
                <ButtonCard title='تسجيل' style={styles.button} />

                <TouchableOpacity style={styles.forgetButton}>
                    <AlmaraiBold style={styles.forgetPassword}>نسيت كلمة المرور؟</AlmaraiBold>
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
};

const styles = StyleSheet.create({
    bgImage: {
        flex: 1
    },
    container: {
        // flexGrow: 1,
        justifyContent: 'center',
        bottom: 30,
    },
    bigFont: {
        fontSize: 20,
        color: 'white',
        paddingRight: 12
    },
    smallFont: {
        fontSize: 16,
        color: 'white',
        paddingRight: 12
    },
    forgetPassword: {
        fontSize: 12,
        color: 'white'
    },
    forgetButton: {
        alignItems: 'center',
        top: 20
    },
    policyView: {
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 20,
        // flex: 1,
        position: 'absolute',
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
    },
    button: {
        width: 394,

    }
});

export default LoginPassword;