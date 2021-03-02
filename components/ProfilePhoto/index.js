import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, PermissionsAndroid, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const ProfilePhoto = (props) => {


    const {
        onPickImage
    } = props

    const [filePath, setFilePath] = useState({});

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.uri);
                console.log('width -> ', response.width);
                console.log('height -> ', response.height);
                console.log('fileSize -> ', response.fileSize);
                console.log('type -> ', response.type);
                console.log('fileName -> ', response.fileName);

                setFilePath(response);
                onPickImage && onPickImage(response)
            });
        }
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response);
            onPickImage && onPickImage(response)
        });
    };

    const photoOption = () => {
        return (
            Alert.alert(
                'UPLOAD PHOTO',
                'Choose Option',
                [
                    {
                        text: 'Open Gallery',
                        onPress: () => chooseFile('photo')
                    },
                    {
                        text: 'Open Camera',
                        onPress: () => captureImage('photo'),
                        style: 'cancel'
                    },
                    { text: 'Close', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            )
        )
    }

    return (
        <View style={styles.profPhoto}>
            <View style={styles.userIcon}>
                {filePath.uri ?
                    <Image source={{ uri: filePath.uri }} style={styles.imageStyle} />
                    :
                    <Icon color="white" size={50} name="user" ></Icon>
                }

            </View>
            <View style={styles.camera}>
                <TouchableOpacity onPress={() => photoOption()}>
                    <Icon color="white" size={17} name="camera" ></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default ProfilePhoto

const styles = StyleSheet.create({
    profPhoto: {
        width: 85,
        height: 85,
        backgroundColor: '#513E6A',
        borderRadius: 43,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5
    },
    userIcon: {
        flex: 1,
        alignContent: 'center',
        position: 'absolute',

    },
    camera: {
        width: 28,
        height: 28,
        backgroundColor: '#9F2A99',
        borderRadius: 14,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageStyle: {
        width: 85,
        height: 85,
        borderRadius: 43,
        resizeMode: 'cover'
    },
})