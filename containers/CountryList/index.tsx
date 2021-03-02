import React, { useEffect, useState } from 'react';
import { View, Text, Modal, ListRenderItemInfo, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getAllCountries } from '../../services/countries';
import { ICountry } from '../../types';
import CountryItem from './CountryItem';

interface IProps {
    onSelectCointry?: (country: ICountry) => void
}

const CountryList: React.FC<IProps> = (props) => {

    const {
        onSelectCointry
    } = props
    const [countries, setCountries] = useState<ICountry[]>()

    useEffect(() => {
        getAllCountries((allCountries) => { 
            setCountries(allCountries)
         })
    }, [])

    const renderItem = ({ item, index }: ListRenderItemInfo<ICountry>) => {
        return (
            <CountryItem
                country={item}
                onSelectCointry={(country) => { onSelectCointry && onSelectCointry(country) }}
            />
        )
    }

    return (
        <FlatList
            data={countries}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(item.name)}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#C9C9C9' }} />}
        />
    );
}

export default CountryList