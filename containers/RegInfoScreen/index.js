import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TextInputCard from '../../components/CustomTextInput'
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/CustomButton';
import PassCard from '../../components/PasswordInput';
import AlmaraiRegular from '../../components/FontedText/AlmaraiRegular';
import CustomHeader from '../../components/CustomHeader';
import ProfilePhoto from '../../components/ProfilePhoto';
import PhoneInput from '../../components/PhoneInput'

const RegInfoScreen = ({ route }) => {

     // const {
     //      params: {
     //           phone = '',
     //           firstName = '',
     //           lastName = '',
     //           email = ''
     //      }
     // } = route
console.log(route)
     const [currentCountry, setCurrentCountry] = useState({ alpha2Code: 'EG', callingCode: '0020' })

     return (
          <LinearGradient
               start={{ x: 0.25, y: 0.25 }} end={{ x: 0.6, y: 1.5 }}
               locations={[0.0, 0.3, 0.6]}
               colors={['#32194E', '#3F1251', '#4B0C57']}
               style={{ flex: 1 }}>

               <CustomHeader xButton forwardButton />

               <View style={styles.UnderHeaderView}>
                    <AlmaraiRegular style={styles.underHeaderWords}>في اقل من دقيقة الرجاء استكمال معلوماتك </AlmaraiRegular>
                    <AlmaraiRegular style={styles.underHeaderWords}>الشخصية لإستكمال عملية التسجيل.</AlmaraiRegular>
               </View>

               <ProfilePhoto
                    onPickImage={(respones) => {

                    }}
               />

               <ScrollView >
                    <PhoneInput
                         currentCountry={currentCountry} style={styles.phoneInput}
                         placeHolder='ادخل رقم الجوال'
                    />

                    <View style={styles.halfInputView}>
                         <TextInputCard style={styles.halfTextInput} placeholder="اسم العائلة" />
                         <TextInputCard style={styles.halfTextInput} placeholder="الاسم الاول" />
                    </View>

                    <TextInputCard placeholder={"البريد الالكتروني"} />

                    <PassCard />

                    <TextInputCard placeholder="تاريخ الميلاد" />
                    <TextInputCard placeholder="الجنس" />
                    <CustomButton title="انشاء حساب جديد" style={styles.button} />

               </ScrollView>

          </LinearGradient>
     )
}

const styles = StyleSheet.create({
     halfInputView: {
          flexDirection: 'row',
          justifyContent: 'center',
     },

     halfTextInput: {
          width: 190,
          marginHorizontal: 6
     },
     numberInput: {
          backgroundColor: 'transparent',
          borderRadius: 3,
          borderColor: 'white',
          borderWidth: 1
     },
     inputStyle: {

          textAlign: 'right',
          fontSize: 14,
          fontWeight: 'bold',
          paddingRight: 8,
          flex: 1
     },
     Header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 8,
          padding: 7
     },
     UnderHeaderView: {
          alignItems: 'center',
          margin: 10
     },
     underHeaderWords: {
          color: 'white',
          fontSize: 16
     },
     phoneInput: {
          marginTop: 20,
          marginHorizontal: 10
     },
     button: {
          width: 393
     }
})


export default RegInfoScreen;