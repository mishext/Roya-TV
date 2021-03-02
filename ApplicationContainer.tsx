import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import SplachScreen from './containers/SplshScreen';
import WelcomScreen from './containers/WelcomeScreen';
import ApplicationRoot from './navigation/RootNavigation';

interface IProps {

}

const ApplicationContainer: React.FC<IProps> = () => {

    const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true)

    const timer = setTimeout(() => {
        setShowSplashScreen(false)
    }, 2000);


    useEffect(() => {
        return () => clearTimeout(timer)
    }, [])

    if (showSplashScreen) {
        return <SplachScreen />
    }

    // return (
    //     <WelcomScreen />
    // )
    return (
        <NavigationContainer>

            <SafeAreaView />

            <ApplicationRoot />

        </NavigationContainer>
    )

}

export default ApplicationContainer