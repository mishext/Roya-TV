import React, { useEffect, useRef, useState } from 'react';
import { Image, Linking, PanResponder, Share, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { memo } from 'react/cjs/react.development';
import AlmaraiBold from '../../../../components/FontedText/AlmaraiBold';
import AlmaraiRegular from '../../../../components/FontedText/AlmaraiRegular';
import { screenHeight as WINDOW_HEIGHT, screenWidth as WINDOW_WIDTH } from '../../../../constants/style';

const dimensionsCalculation = (number) => {
    return number
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const ProgressBarList = ({ item, width, subStoryIndex, storyIndex, currentStoryIndex, onRightSidePressed, pauseStory }) => {

    return (
        <View
            style={[Styles.ProgressBarList, { justifyContent: item.length == 1 ? 'center' : 'space-between' }]}
        >

            {item.map((v, i) => (
                <RowBar
                    key={String(i)}
                    width={width}
                    active={subStoryIndex == i && storyIndex == currentStoryIndex}
                    onRightSidePressed={onRightSidePressed}
                    pauseStory={pauseStory}
                />
            ))}

        </View>
    )
}


const RowBar = ({ width, active, onRightSidePressed, pauseStory }) => {

    const [stepForwaredNumber, setstepForwaredNumber] = useState(0);

    useInterval(() => {
        if (active) {

            if (stepForwaredNumber >= 1) {

                setstepForwaredNumber(0)
                onRightSidePressed && onRightSidePressed()

            }
            else {

                if (pauseStory) {
                    setstepForwaredNumber(prev => prev)
                } else {
                    setstepForwaredNumber(prev => prev + 0.07)
                }

            }

        } else {
            setstepForwaredNumber(0)
        }
    }, 1000)


    return (
        <Bar
            color={active ? '#FFFFFF' : 'rgba(216, 216, 216, 0.3)'}
            animationType='timing'
            useNativeDriver={true}
            progress={stepForwaredNumber ? stepForwaredNumber : 1}
            width={width}
            borderColor='transparent'
            height={2}
            animated={active}
            style={{ backgroundColor: 'rgba(216, 216, 216, 0.3)' }}
        />
    )
}



const StoryRow = memo(({ item, storyIndex, allStories, onFinsih, currentStoryIndex }) => {

    const subStoriesCount = allStories[storyIndex].subStories.length

    const [subStoryIndex, setsubStoryIndex] = useState(0)

    const [pauseStory, setPauseStrory] = useState(false)

    const [loadingImage, setLoadingImage] = useState(false)

    // useEffect(() => {
    //     Image.preload([{ uri: item.subStories[subStoryIndex].image }])
    // }, [])

    const onRightSidePressed = () => {

        if (subStoryIndex < subStoriesCount - 1) {
            setsubStoryIndex((prevIndex) => prevIndex + 1)
            return
        }
        onFinsih && onFinsih(1) // thats mean he try to get next subStory and its not found

    }

    const onLeftSidePressed = () => {

        if (subStoryIndex) {
            setsubStoryIndex((prevIndex) => prevIndex - 1)
            return
        }

        onFinsih && onFinsih(-1) // thats mean he try to get perv subStory and its not found
    }


    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                const {
                    y0,
                    moveY
                } = gestureState

                if (y0 > moveY + dimensionsCalculation(20)) {
                    Linking.openURL(item.subStories[subStoryIndex].link)
                }

            }
        })
    ).current;

    return (
        <View
            {...panResponder.panHandlers}
            style={{ flex: 1 }}
        >

            <ProgressBarList
                item={item.subStories}
                subStoryIndex={subStoryIndex}
                storyIndex={storyIndex}
                currentStoryIndex={currentStoryIndex}
                width={(WINDOW_WIDTH / subStoriesCount) - dimensionsCalculation(12)}
                onRightSidePressed={onRightSidePressed}
                pauseStory={pauseStory}
            />

            <View style={Styles.header}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                    <Image
                        source={{ uri: allStories[storyIndex].image }}
                        style={Styles.storyImage}
                    />
                    <AlmaraiRegular style={Styles.storyImageTitle}>
                        {item.title}
                    </AlmaraiRegular>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                    <TouchableOpacity
                        style={{ marginHorizontal: dimensionsCalculation(15) }}
                        onPress={() => {
                            Share.share({
                                title: item.subStories[subStoryIndex].link,
                                message: item.subStories[subStoryIndex].link
                            })
                        }}
                    >
                        <Image
                            source={require('../../../assets/images/share.png')}
                            resizeMode='center'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            // dismissModal('Story')
                        }}
                    >
                        <Image
                            source={require('../../../assets/images/close.png')}
                            resizeMode='center'
                        />
                    </TouchableOpacity>

                </View>

            </View>

            <TouchableWithoutFeedback
                onLongPress={() => { setPauseStrory(true) }}
                onPressOut={() => {
                    if (pauseStory) {
                        setPauseStrory(false)
                    }
                }}
                onPress={(e) => {

                    const halfScreen = WINDOW_WIDTH / 2

                    if (e.nativeEvent.locationX > halfScreen) { // pressedRight
                        onRightSidePressed()
                        return
                    }

                    onLeftSidePressed() // pressedLeft
                }}
            >
                <Image
                    style={Styles.image}
                    source={{ uri: item.subStories[subStoryIndex].image }}
                />

            </TouchableWithoutFeedback>


            <AlmaraiBold style={Styles.footer} >
                {`${item.subStories[subStoryIndex].title}`}
            </AlmaraiBold>


        </View>

    )
})

const Styles = StyleSheet.create({
    header: {
        width: WINDOW_WIDTH,
        position: 'absolute',
        top: 22,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: dimensionsCalculation(10),
        justifyContent: 'space-between'
    }, image: {
        height: WINDOW_HEIGHT, width: WINDOW_WIDTH,
        backgroundColor: 'transparent'
    },
    footer: {
        width: WINDOW_WIDTH,
        position: 'absolute',
        bottom: dimensionsCalculation(90),
        zIndex: 1,
        fontSize: dimensionsCalculation(20),
        color: '#FFFFFF',
        textAlign: 'right',
        paddingHorizontal: dimensionsCalculation(10)
    },
    ProgressBarList: {
        zIndex: 1,
        top: 15,
        flexDirection: 'row',
        width: WINDOW_WIDTH,
        paddingHorizontal: dimensionsCalculation(10),
    },
    storyImage: {
        width: dimensionsCalculation(36),
        height: dimensionsCalculation(36),
        borderRadius: dimensionsCalculation(18)
    },
    storyImageTitle: {
        fontSize: dimensionsCalculation(12),
        color: '#FFFFFF',
        paddingHorizontal: dimensionsCalculation(10)
    }

})
export default StoryRow