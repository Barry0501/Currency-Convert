import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY }
    from "../actions/currencies";

const initState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {},
};


const setConversions = (state, action) => {
    let conversion = {
        isFetching: true,
        date: '',
        rates: {

        },
    };

    if(state.conversions[action.currency]){
        conversion = state.conversions[action.currency];
    }

    return{
        ...state.conversions,
        [action.currency]: conversion,
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            };
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0
            };
        case CHANGE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency,
                conversions: setConversions(state, action)
            };
        case CHANGE_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.currency,
                conversions: setConversions(state, action)
            };
        default:
            return state;
    }
}

export default reducer;