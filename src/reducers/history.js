/**
 * Created by pusti on 26.08.2017.
 */
const addItem = (array,{date, oldBase,oldAmount,newBase,newAmount}) => {
    array.push({date, oldBase, oldAmount, newBase, newAmount});
    return array.slice();
};
const searchHisory = (array, {query}) =>
    array.filter(elem=>
        (~(elem['oldBase'].toUpperCase()).search(query.toUpperCase())) ||
        (~(elem['newBase'].toUpperCase()).search(query.toUpperCase()))
    );

const history = (state = {}, action) => {
    switch (action.type) {
        case 'PUSH_HISTORY':
            return {
                ...state,
                array: addItem(state.array,action.payload),
                static:addItem(state.static,action.payload)
            };
        case 'SEARCH_HISTORY':
            return {
                ...state,
                array: searchHisory(state.static,action.payload)
            };
        case 'INIT_HISTORY':
            return {
                ...state,
                array: [],
                static:[]
            };
        default:
            return state;
    }
};

export default history;