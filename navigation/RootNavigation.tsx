import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

interface IProps {

}

const ApplicationRoot: React.FC<IProps> = () => {

    const userIsLoggedIn = true  // will be from redux

    if (!userIsLoggedIn) {
        return <AuthNavigator />
    }

    return <MainTabNavigator />

}

export default ApplicationRoot