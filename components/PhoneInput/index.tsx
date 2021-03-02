import React, { useState } from 'react';
import { Image, StyleSheet, TextProps, TouchableOpacityProps, View, ViewProps, Modal, Alert, Platform, TextInputProps } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GetCountryFlag } from '../../utils/Places';
import AlmaraiBold from '../FontedText/AlmaraiBold';
import { FontNames } from '../FontedText/Fonts';
import { ICountry } from '../../types';
import CountryList from '../../containers/CountryList';
import { largePagePadding } from '../../constants/style';

interface PhoneInputProps extends ViewProps {
    textInputProps?: TextInputProps,
    placeHolder?: string,
    currentCountry?: ICountry,
    disabled?: boolean,
    onSelect?: (country: ICountry) => void
}

const height = 40

const PhoneInput: React.FC<PhoneInputProps> = (props) => {


    const {
        textInputProps,
        placeHolder,
        currentCountry,
        style,
        disabled,
        onSelect,
        ...restProps
    } = props

    const {
        alpha2Code,
        callingCode
    } = currentCountry!

    const [isCountriesVisible, setIsCountriesVisible] = useState<boolean>(false)


    const showCountries = () => setIsCountriesVisible(true);
    const hideCountries = () => setIsCountriesVisible(false);

    return (
        <View style={[styles.container, { backgroundColor: disabled ? 'transparent' : '#FFFFFF', }, style]} {...restProps}>

            <View style={styles.subContainer}>

                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => { showCountries() }}
                    disabled={disabled}
                >

                    <Image
                        style={styles.image}
                        source={GetCountryFlag(alpha2Code)}

                    />


                    <AlmaraiBold style={styles.textNumber}  >
                        {callingCode}
                    </AlmaraiBold>

                </TouchableOpacity>

                <View style={styles.dash} />

            </View>

            <TextInput
                style={[styles.textInput, textInputProps?.style]}
                placeholder={placeHolder}
                keyboardType='phone-pad'
                {...textInputProps}
            />

            <Modal
                visible={isCountriesVisible}
                presentationStyle='formSheet'
                onDismiss={() => { hideCountries() }}
                onRequestClose={() => { hideCountries() }}
                style={{ paddingVertical: Platform.OS == 'ios' ? 0 : largePagePadding }}
            >
                <CountryList
                    onSelectCointry={(conutry) => { hideCountries(); onSelect && onSelect(conutry) }}
                />
            </Modal>
        </View>
    )
};

PhoneInput.defaultProps = {
    disabled: false
}

const styles = StyleSheet.create({

    container: {
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        height: 50,
        flex: 1
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '25%',
        justifyContent: 'space-between'
    },
    image: {
        width: height,
        height,
        borderRadius: 20
    },
    textInput: {
        width: '70%',
        paddingVertical: 5,
        height,
        fontFamily: FontNames.AlmaraiBold,
        color: '#262D3A',
        textAlign: 'right'
    },
    dash: {
        width: 1,
        height,
        backgroundColor: '#979797'
    },
    textNumber: {
        marginHorizontal: 5,
        fontSize: 15,
        textAlignVertical: 'center'
    }

})

export default PhoneInput