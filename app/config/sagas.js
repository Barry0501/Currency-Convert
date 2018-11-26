import { takeEvery, select } from "redux-saga/effects";

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from "../actions/currencies";

const getLastestRate = currency => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {

    try {
        let currency = action.currency;

        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }

        const response = yield call(getLastestRate, currency);
        const result = yield response.json();

        if(result.error){

        }else{
            
        }

    } catch (error) {
        console.log('Saga error ', error);
    }

    yield;
};

export default function* rootSage() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);

}