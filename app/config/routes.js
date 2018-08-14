import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

export const AppStack = createStackNavigator(
    {
    Home: {
        screen: Home,
        navigationOptions: {
            header:null
        }
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: {
            header:null
        }
    },
    },
    {
        mode: 'modal',
        //cardStyle: { paddingTop: StatusBar.currentHeight }
    }
)