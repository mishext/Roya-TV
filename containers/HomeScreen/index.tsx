import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StoriesList from './Stories';
import { IStory } from './Stories/types';

export interface HomeScreenProps {
}

// const subStoriesOne = [
//     { id: '12', title: 'this is title 1', image: 'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '24', title: 'this is title 2', image: 'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '35', title: 'this is title 3', image: 'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '57', title: 'this is title 5', image: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },

//   ]

//   const subStoriesTwo = [
//     { id: '35', title: 'this is title 3', image: 'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '46', title: 'this is title 4', image: 'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '57', title: 'this is title 5', image: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '46', title: 'this is title 4', image: 'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },


//   ]

//   const subStoriesThree = [
//     { id: '57', title: 'this is title 5', image: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '59', title: 'this is title 5', image: 'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '57', title: 'this is title 5', image: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 },
//     { id: '59', title: 'this is title 5', image: 'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg', link: 'https://www.google.com', seen: false, viewsCount: 0 }
//   ]

const items: IStory[] = [
    {
        id: '1',
        title: 'first Titile',
        uri: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
        seen: false
    },
    {
        id: '2',
        title: 'secound title',
        seen: true,
        uri: 'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
    },
    {
        id: '3',
        title: 'title 4',
        uri: 'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
        seen: false,
    },
];

const HomeScreen: React.FC<HomeScreenProps> = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#181E24' }}>

            <StoriesList data={items} />

        </View>
    );
}
export default HomeScreen
