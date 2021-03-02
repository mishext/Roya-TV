import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputCard from '../CustomTextInput/index';


const PasswordInput = () => {
    const [data, setData] = useState({
        password: '',
        secureTextEntry: true
    });

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <View style={styles.passwordContainer}>

            <TextInputCard secureTextEntry={data.secureTextEntry ? true : false} placeholder="انشاء كلمة سر"

            />
            <TouchableOpacity style={styles.eyeIconTouchable}
                onPress={updateSecureTextEntry} >
                {data.secureTextEntry ?
                    <Icon size={32} name="eye-off"></Icon>
                    :
                    <Icon size={32} name="eye"></Icon>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    eyeIconTouchable: {
        alignItems: 'flex-start',
        width: 32,
        height: 32,
        position: 'absolute',
        alignSelf: 'center',
        left: 12,
        paddingTop: 4
    },
    passwordContainer: {
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: 'flex-start',
    }
})

export default PasswordInput