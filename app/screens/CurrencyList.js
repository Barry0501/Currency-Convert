import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import Title from '../components/Header/Title';
import Utils from '../config/Utils';
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component{
    constructor(props){
        super(props);
        titleScreen = this.props.navigation.state.params.title;

        StatusBar.setHidden(false);
    }

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string
    }

    handlePress = (currency) => {
        const { type } = this.props.navigation.state.params;
        if(type == "base"){
            // TODO:
            this.props.dispatch(changeBaseCurrency(currency));
        }
        else{
            // quote
            this.props.dispatch(changeQuoteCurrency(currency))
        }
        Utils.goback(this)
    }

    render() {
        let comparisionCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type == "quote"){
            comparisionCurrency = this.props.quoteCurrency;
        }
        return (
            <View>
                <Title text={titleScreen} onPress={() => Utils.goback(this)} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) =>
                        <ListItem
                            text={item}
                            selected={item === comparisionCurrency}
                            onPress={() => this.handlePress(item)}
                            iconBackground={this.props.primaryColor}
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

const mapStateToProps = (state) => {
    return{
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.theme.primaryColor
    }
}

export default connect(mapStateToProps)(CurrencyList);
