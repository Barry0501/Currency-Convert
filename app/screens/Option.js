import React, { Component } from 'react';
import { ScrollView, StatusBar, Image } from 'react-native';

import { ListItem, Separator } from '../components/List';
import Images from '../data/images';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Option extends Component{
    handleThemePress = () => {
        alert('press themes');
    }

    handleSitePress = () =>{
        alert('press site');
    }

    render(){
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
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

export default Option;