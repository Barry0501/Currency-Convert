import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    container:{
        alignItems: 'center',
    },
    wraper:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        width:19,
        marginRight: 19,
    },
    text:{
        color: '$white',
        fontSize: 14,
        fontWeight: '300',
        paddingVertical: 20,
    },
})