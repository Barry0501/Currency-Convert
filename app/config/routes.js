import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Option';
import Themes from '../screens/Themes';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    Options: {
        screen: Options,
    },
    Themes: {
        screen: Themes,
    },
},
    {
        headerMode: 'screen',
        navigationOptions: {
            header:null
        }
    }
)

const CurrencyStack = createStackNavigator(
    {
        CurrencyList: {
            screen: CurrencyList,
            navigationOptions: {
                header:null
            }
        },
    }
)

export const AppStack = createStackNavigator(
    {
        Home: HomeStack,
        CurrencyList:CurrencyStack,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle: { paddingTop: StatusBar.currentHeight } // fix for Android
    }
)

