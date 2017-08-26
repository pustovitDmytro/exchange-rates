/**
 * Created by pusti on 25.08.2017.
 */
const searchRates = (rates, {query}) =>
    rates.filter(elem=>~(elem['name'].toUpperCase()).search(query.toUpperCase()));

const toArray = (obj) =>{
    let result = [];
    for(let key in obj) {
        result.push(
            {
                name: key,
                value: obj[key]
            }
        );
    }
    return result;
};
const rates = (state = {}, action) => {
    switch (action.type) {
        case 'GET_RATES':
            return {
                ...state,
                array: toArray(action.payload.rates),
                static: toArray(action.payload.rates),
                date: action.payload.date,
                base: action.payload.base
            };
        case 'SEARCH_RATES':
            return {
                ...state,
                array: searchRates(state.static,action.payload)
            };
        case 'API_ERROR':
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default rates;