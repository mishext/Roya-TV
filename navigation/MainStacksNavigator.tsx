import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../containers/HomeScreen';
import Story from '../containers/HomeScreen/Stories/Story';

export type HomeScreenParamList = {
	HomeScreen: undefined,
	Story: undefined
}

type StoryParamList = {
	Story: undefined
}

const HomeScreen_Navigator = createStackNavigator<HomeScreenParamList>();
const Story_Navigator = createStackNavigator<StoryParamList>();

const StoryStack = () => (
	<Story_Navigator.Navigator>
		<Story_Navigator.Screen name='Story' component={Story} />
	</Story_Navigator.Navigator>
)

export const HomeScreenStack: React.FC = () => (
	<HomeScreen_Navigator.Navigator headerMode='none'>
		<HomeScreen_Navigator.Screen name='HomeScreen' component={HomeScreen} />
		<HomeScreen_Navigator.Screen name='Story' component={StoryStack} />
	</HomeScreen_Navigator.Navigator>
)


