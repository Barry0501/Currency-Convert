import EStyleSheet from "react-native-extended-stylesheet";
import { Platform } from 'react-native';

let paddingTopMul = 0;
let paddingBotX = 0;
let heightHed = 50;
let heightBot = 50;

if(Platform.OS=='ios' || Platform.OS=='android' && Platform.Version >= 20){
    heightHed = 60;
    paddingTopMul = 20;
}

export default EStyleSheet.create({
    container:{
        position: 'absolute',
        top:0,
        left: 0,
        right: 0,
        '@media ios':{
            paddingTop: 30,
        },
    },
    button:{
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    icon:{
        width:18,
    },
    containerHeader:{
        height:heightHed,
        backgroundColor: '$white',
        marginBottom: 2,
    },
    nHcontent: {
        flex:1,
        paddingTop:paddingTopMul,
        flexDirection: 'row',
        alignItems:'center',
    },
    nHleft: {
        width:48,
        alignItems:'center'
    },
    nHmid: {
        flex:1,
        alignItems:'center'
    },
    nHright: {
        width:48,
        alignItems:'center'
    },
    ntitle: {
        color:'$darkText',
        fontSize:18,
        fontWeight: '700',
    },
    image:{
        width:20,
        height:20
    },
});