import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { screenWidth } from '../../constants/style';




export default function OtpInput(props) {
    const { keyboardType } = props;
    return (

        <View style={styles.InputView}>

            <CodeInput style={styles.textInput}
                placeholderTextColor="black"
                keyboardType="numeric"
                autoFocus={false}
                ignoreCase={true}
                codeLength={4}
                space={4}
                onFulfill={(number) => (number)}
                containerStyle={{ justifyContent:'space-between' }}
            />

        </View>
    )
}



const styles = StyleSheet.create({
    InputView: {
        marginBottom: 18,
        flex: 1
    },
    textInput: {
        height: 50,
        width: screenWidth / 5,
        borderRadius: 3,
        borderColor: 'black',
        backgroundColor: 'white',
        fontSize: 20,
        textAlign: 'center',

    }
})