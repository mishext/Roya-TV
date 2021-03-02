import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import AlmaraiBold from '../../components/FontedText/AlmaraiBold';
import PhoneInput from '../../components/PhoneInput';
import SignInWith from '../../components/SignInWith';
import { mediumPagePadding, screenHeight } from '../../constants/style';
import { AuthParamList } from '../../navigation/AuthNavigator';
import { ICountry } from '../../types';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
interface WelcomScreenProps {
    navigation?: StackNavigationProp<AuthParamList, 'Welcome'>;
}

const WelcomScreen: React.FC<WelcomScreenProps> = (props) => {

    const [currentCountry, setCurrentCountry] = useState<ICountry>({ alpha2Code: 'EG', callingCode: '+20' })

    const [phone, setPhone] = useState<string>()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => { GoogleSignin.configure() }, [])

    const {
        navigation
    } = props

    const facebookInfoCallback = (error: any, result: any) => {
        if (error) {

            setIsLoading(false)
        }
        else {
            const {
                last_name,
                first_name,
                id,
                email
            } = result

            setIsLoading(false)

            console.log(result)
        }
    }

    const onFaceBookPressed = () => {

        setIsLoading(true)

        LoginManager.logInWithPermissions(["public_profile"]).then(
            (result) => {
                if (result.isCancelled) {
                    setIsLoading(false)
                }
                else {
                    const infoRequest = new GraphRequest(
                        '/me?fields=id,email,first_name,last_name',
                        null,
                        facebookInfoCallback
                    )

                    new GraphRequestManager().addRequest(infoRequest).start()
                }
            },
            (error) => {
                setIsLoading(false)

            }
        )

    }

    const onGooglePressed = async () => {

        setIsLoading(true)

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const {
                name,
                id,
                email
            } = userInfo.user
            setIsLoading(false)

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }

            setIsLoading(false)
        }

    }
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={require('../../assets/images/WelcomBG.png')}
        >

            <CustomHeader
                onPressClose={() => { Alert.alert('hii') }}
                label={() => (
                    <AlmaraiBold style={{ color: 'white' }}>
                        تخطي
                    </AlmaraiBold>
                )}
            />

            <ScrollView
                contentContainerStyle={{ paddingTop: screenHeight / 3, paddingHorizontal: mediumPagePadding }}
            >

                <AlmaraiBold style={styles.text} >
                    الرجاد ادخال رقم الموبايل لمتابعه
                </AlmaraiBold>

                <AlmaraiBold style={styles.text} >
                    عمليه التسجيل
                </AlmaraiBold>

                <PhoneInput
                    currentCountry={currentCountry}
                    onSelect={(country) => { setCurrentCountry(country) }}
                    style={{ marginTop: 10 }}
                    placeHolder='ادخل رقم الجوال'
                    textInputProps={{
                        onChangeText: (text) => {
                            setPhone(text)
                        },
                        value: phone
                    }}
                />

                <CustomButton
                    // disabled
                    title='متابعه'
                    onPress={() => { navigation?.navigate('OtpScreen', { phone }) }}
                    style={{ marginTop: 10 }}
                />


                <View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', height: 1, marginTop: 40 }} />

                    <AlmaraiBold
                        style={{
                            color: 'rgba(255, 255, 255, 1)',
                            fontSize: 16,
                            bottom: 10,
                            alignSelf: 'center',
                            backgroundColor: '#411253',
                            paddingHorizontal: 20
                        }}
                    >
                        او يمكنك التسجيل عبر
                    </AlmaraiBold>
                </View>

                {
                    isLoading ? <ActivityIndicator size='large' /> :

                        <SignInWith
                            containerStyle={{ marginTop: 10 }}
                            onFaceBookPress={() => { onFaceBookPressed() }}
                            // onTwterPress
                            onGooglePress={() => { onGooglePressed() }}
                        />
                }


            </ScrollView>

        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: 18, color: 'white', marginTop: 10,
        textAlign: 'right'
    }
})

export default WelcomScreen