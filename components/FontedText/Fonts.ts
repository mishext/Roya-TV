import { Platform } from 'react-native';

export const FontNames = {
    AlmaraiRegular: Platform.OS == 'ios' ? 'Almarai-Regular' : 'Almarai-Regular',
    AlmaraiBold: Platform.OS == 'ios' ? 'Almarai-Bold' : 'Almarai-Bold',
}