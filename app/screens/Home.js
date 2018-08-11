import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import  Container  from '../components/Container/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';

class Home extends Component{
    handlePressBaseCurrency = () => {
        alert('press base');
    }

    handlePressQuoteCurrency = () => {
        //alert('press quote');
    }

    handleTextChange = (text) => {
        console.log('change text', text);
    }

    render(){
        return(
            <Container>
                <StatusBar translucent={false} // cho Android
                    barStyle="light-content" // cho IOS
                />
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
                    onPress={this.handlePressBaseCurrency}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />
            </Container>
        )
    }
}

export default Home;

