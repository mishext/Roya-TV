import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegInfoScreen from '../containers/RegInfoScreen';
import WelcomScreen from '../containers/WelcomeScreen';
import OtpScreen from '../containers/OtpScreen';
interface AuthProp {

}

export type AuthParamList = {
	Login: undefined,
	Registration: undefined,
	Welcome: undefined,
	OtpScreen: {
		phone?: string
	},
	RegInfoScreen: {
		phone?: string,
		firstName?: string,
		lastName?: string,
		email?: string
	}
}

const Auth_Navigator = createStackNavigator<AuthParamList>();

const AuthNavigator: React.FC<AuthProp> = () => (
	<Auth_Navigator.Navigator headerMode='none'>
		<Auth_Navigator.Screen name='Welcome' component={WelcomScreen} />
		<Auth_Navigator.Screen name='OtpScreen' component={OtpScreen} />
		<Auth_Navigator.Screen name='RegInfoScreen' component={RegInfoScreen} />
	</Auth_Navigator.Navigator>
)

export default AuthNavigator