import React, { Component } from 'react';
import { ScrollView, StatusBar, Image, Linking} from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import Images from '../data/images';
import Title from '../components/Header/Title';
import Utils from '../config/Utils';
import { connectAlert } from '../components/Alert/index';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Option extends Component{
    constructor(props){
        super(props);
        titleScreen = this.props.navigation.state.params.title;

        StatusBar.setHidden(false);
    }

    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    }

    handleThemePress = () => {
        Utils.goscreen(this,'Themes',{title:'Themes'})
    }

    handleSitePress = () => { 
        Linking.openURL('ssshttp://www.bongda.com.vn/')
        .catch((err) => this.props.alertWithType('error','Sorry!', "This Url can't be opened right now"))
    }

    render(){
        return(
            <ScrollView>
                <Title text={titleScreen}
                    onPress={() => {
                        Utils.goback(this);
                    }}
                />
                <ListItem 
                    text="Themes"
                    onPress={this.handleThemePress}
                    customIcon={
                        <Image source={Images.arrowRight}
                                resizeMode="contain"
                                style={{width:ICON_SIZE,height:ICON_SIZE}}
                         />
                    }
                />
                <Separator />
                <ListItem 
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon={
                        <Image source={Images.link}
                                resizeMode="contain"
                                style={{width:ICON_SIZE,height:ICON_SIZE}}
                         />
                    }
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Option);