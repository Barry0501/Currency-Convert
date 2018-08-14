import { AsyncStorage, Alert} from 'react-native';

//--Thông số cấu hình mặc
const domain = 'https://xxx/';
export const domainIMG = 'http://xxxx';


goscreen = (nthis, screen, param = null) => {
    if (param == null)
        nthis.props.navigation.navigate(screen,{lang:nthis.lang});
    else nthis.props.navigation.navigate(screen, {...param,lang:nthis.lang});

}

goback = (nthis, screen='') => {
    if (screen == '')
        nthis.props.navigation.goBack();
    else nthis.props.navigation.goBack(screen);
}

showmsg = (title, message='',btnTextOk='OK') => {
    setTimeout(() => {
        Alert.alert(title, message,[{text:btnTextOk}]);
    }, 520);
}

showyesno = (title, message='', btnTextYes='Xác nhận',btnTextNo='Xem lại',funcYes = ()=>{console.log('is Yes')}, funcNo = function(){ console.log('is No')}) => {
    Alert.alert(
        title,
        message,
        [
            {text: btnTextNo, onPress:  funcNo},
            {text: btnTextYes, onPress: funcYes,style: 'cancel'}
        ],
        { cancelable: false }
    )
}

function nlog(val) {
    console.log(val);
}

//-------
getDomain=(url)=>{
    if(url== undefined || url ==null)
        url='';
    len=0;
    count=0;
    for (let index = 0; index < url.length; index++) {
        const element = url[index];
        if(element=='/')
            count++;
        if(count==3)
            break;
        len++;
    }
    return url.substr(0,len);
}


export default {
    goscreen, nlog, goback, showyesno, showmsg, getDomain
};