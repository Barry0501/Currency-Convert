import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container:{
        alignItems: 'center',
    },
    containerImage:{
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    containerLogo:{
        width:imageWidth / 2,
    },
    text:{
        fontWeight: '600',
        fontSize: 28,
        marginTop: 10,
        letterSpacing: -0.5,
        color: '$white',
    },
});
