import * as React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlmaraiBold from '../../components/FontedText/AlmaraiBold';
import { largePagePadding, pagePadding } from '../../constants/style';
import { ICountry } from '../../types';
import { GetCountryFlag } from '../../utils/Places';
import { TrimText } from '../../utils/Text';

interface CountryItemProps {
  country: ICountry,
  onSelectCointry: (country: ICountry) => void
}

const CountryItem: React.FC<CountryItemProps> = (props) => {

  const {
    country: {
      alpha2Code,
      name,
      callingCodes,
      callingCode
    },
    onSelectCointry,
    country,
  } = props

  return (

    <TouchableOpacity
      onPress={() => { onSelectCointry && onSelectCointry(country) }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: largePagePadding,
        marginVertical: pagePadding,
        flex: 1
      }}
    >

      <AlmaraiBold style={{ color: '#1AAF5D', fontSize: 16 }} ellipsizeMode='tail' >
        {callingCode}
      </AlmaraiBold>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >

        <AlmaraiBold style={{ color: '#3B4558', fontSize: 16 }} >
          {TrimText(name!, 20)}
        </AlmaraiBold>

        <Image source={GetCountryFlag(alpha2Code)} style={{ borderRadius: 25, width: 50, height: 50, marginHorizontal: 5 }} />

      </View>

    </TouchableOpacity>

  );

};

export default CountryItem