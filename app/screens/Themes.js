import React, { Component } from 'react';
import { View, Text, ScrollView,StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import Title from '../components/Header/Title';
import Utils from '../config/Utils';
import { changePrimaryColor } from "../actions/theme";

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $organge: '$primaryOrange',
    $purple: '$primaryPurple',
})

class Themes extends Component{
    constructor(props){
        super(props);
        titleScreen = this.props.navigation.state.params.title;

        StatusBar.setHidden(false);
    }

    static propTypes = {
        dispatch: PropTypes.func
    }

    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
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
                    text="Blue"
                    selected
                    checkmark={false}
                    onPress={() => this.handleThemePress(styles.$blue)}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem 
                    text="Green"
                    selected
                    checkmark={false}
                    onPress={() => this.handleThemePress(styles.$green)}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem 
                    text="Orange"
                    selected
                    checkmark={false}
                    onPress={() => this.handleThemePress(styles.$organge)}
                    iconBackground={styles.$organge}
                />
                <Separator />
                <ListItem 
                    text="Purple"
                    selected
                    checkmark={false}
                    onPress={() => this.handleThemePress(styles.$purple)}
                    iconBackground={styles.$purple}
                />
                <Separator />               
            </ScrollView>
        )
    }
}

export default connect()(Themes);