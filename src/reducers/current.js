/**
 * Created by pusti on 26.08.2017.
 */
const current = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENCY':
            return {
                ...state,
                amount: action.payload.amount,
                base: action.payload.base
            };
        case 'INIT_CURRENCY':
            return {
                ...state,
                amount: 100,
                base: "USD"
            };
        default:
            return state;
    }
};

export default current;