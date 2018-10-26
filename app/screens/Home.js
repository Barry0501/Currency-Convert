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

import { swapCurrency,changeCurrencyAmount } from "../actions/currencies";


class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConversionDate: PropTypes.object,
    }

    componentWillMount(){
        this.setStatusBar();
    }

    setStatusBar = () => { 
        StatusBar.setHidden(true);
    } 

    handlePressBaseCurrency = () => {
        Utils.goscreen(this,'CurrencyList',{title:'Base Currency'})
    }

    handlePressQuoteCurrency = () => {
        Utils.goscreen(this,'CurrencyList',{title:'Quote Currency'})
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
            <Container>
                <StatusBar translucent={false} // cho Android
                    barStyle="light-content" // cho IOS
                />

                <Header onPress={this.handleOptionPress} />

                <KeyboardAvoidingView>
                    <Logo />

                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                    />

                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={quotePrice}
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
    };
}

export default connect(mapStateToProps)(Home);

