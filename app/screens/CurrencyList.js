import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import Title from '../components/Header/Title';
import Utils from '../config/Utils';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component{
    constructor(props){
        super(props);
        titleScreen = this.props.navigation.state.params.title;

        StatusBar.setHidden(false);
    }

    static propTypes = {
        navigation: PropTypes.object,
    }

    handlePress = () => {
        alert('pressed')
    }

    render() {
        return (
            <View>
                <Title text={titleScreen}
                    onPress={() => {
                        Utils.goback(this);
                    }}
                />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) =>
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />
                    }
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
};

export default CurrencyList;
