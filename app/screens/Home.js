import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import  Container  from '../components/Container/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text'
import  Header from '../components/Header/Header';
import Utils from '../config/Utils';

import { swapCurrency,changeCurrencyAmount, getInitialConversion } from "../actions/currencies";


class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConversionDate: PropTypes.object,
        primaryColor: PropTypes.string,
    }

    componentWillMount(){
        this.setStatusBar();
        this.props.dispatch(getInitialConversion());
    }

    setStatusBar = () => { 
        StatusBar.setHidden(true);
    } 

    handlePressBaseCurrency = () => {
        Utils.goscreen(this,'CurrencyList',{title:'Base Currency', type: 'base'})
    }

    handlePressQuoteCurrency = () => {
        Utils.goscreen(this,'CurrencyList',{title:'Quote Currency', type: 'quote'})
    }

    handleTextChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    }

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency())
    }

    handleOptionPress = () => {
        Utils.goscreen(this,'Options',{title:'Options'})
    }

    render(){

        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if(this.props.isFetching){
            quotePrice = '...'
        }

        return(
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} // cho Android
                    barStyle="light-content" // cho IOS
                />

                <Header onPress={this.handleOptionPress} />

                <KeyboardAvoidingView>
                    <Logo tintColor={this.props.primaryColor} />

                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                        textColor={this.props.primaryColor}
                    />

                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={quotePrice}
                        textColor={this.props.primaryColor}
                    />

                    <LastConverted 
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        date = {this.props.lastConversionDate}
                        conversionRate = {this.props.conversionRate}
                    />

                    <ClearButton 
                        text="Reverse Currencies"
                        onPress={this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConversionDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor: state.theme.primaryColor
    };
}

export default connect(mapStateToProps)(Home);

