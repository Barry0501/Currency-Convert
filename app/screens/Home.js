import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';


import  Container  from '../components/Container/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text'
import  Header from '../components/Header/Header';
import Utils from '../config/Utils';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component{
    static propTypes = {
        navigation: PropTypes.object,
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

    handleTextChange = (text) => {
        console.log('change text', text);
    }

    handleSwapCurrency = () => {
        alert('press swap');
    }

    handleOptionPress = () => {
        Utils.goscreen(this,'Options',{title:'Options'})
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false} // cho Android
                    barStyle="light-content" // cho IOS
                />

                <Header onPress={this.handleOptionPress} />

                <KeyboardAvoidingView>
                    <Logo />

                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangText={(value) => this.handleTextChange(value)}
                    />

                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={TEMP_QUOTE_PRICE}
                    />

                    <LastConverted 
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        date = {TEMP_CONVERSION_DATE}
                        conversionRate = {TEMP_CONVERSION_RATE}
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

export default Home;

