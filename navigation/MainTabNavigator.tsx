import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';

interface MainTabProp {

}

export type MainTabPropParamList = {
    Home: undefined
}

const MainTab_Navigator = createBottomTabNavigator<MainTabPropParamList>()


 const MainTabNavigator: React.FC<MainTabProp> = () => {
    return (
        <MainTab_Navigator.Navigator>
            <MainTab_Navigator.Screen  name='Home' component={HomeScreen} />
        </MainTab_Navigator.Navigator>
    )
}

export default MainTabNavigator
