import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $smallContainerSize: imageWidth / 2,
    $smallImageSize: imageWidth / 4,
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth / 2,
    container:{
        alignItems: 'center',
    },
    containerImage:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeContainerSize',
        height: '$largeContainerSize',
    },
    logo: {
        width: '$largeImageSize',
        tintColor: '$primaryBlue',
    },
    text:{
        fontWeight: '600',
        fontSize: 28,
        marginTop: 10,
        letterSpacing: -0.5,
        color: '$white',
    },
});
