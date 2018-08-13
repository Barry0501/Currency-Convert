import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

const CurrencyList = () => {

    handlePress = () => {
        alert('pressed')
    }

    return (
        <View>
            <StatusBar barStyle="default" translucent={false} />
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
};

export default CurrencyList;
