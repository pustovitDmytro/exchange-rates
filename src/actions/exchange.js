/**
 * Created by pusti on 26.08.2017.
 */
import {getRates} from './load.api';
const exchange = (newBase, kof) =>
        (dispatch, getState) => {
            const {base,amount} = getState().current;
            const {date}= getState().rates;
            const newAmount = (kof*amount).toFixed(2);
            dispatch({
                type: 'CHANGE_CURRENCY',
                payload: {
                    base: newBase,
                    amount: newAmount
                }
            });
            dispatch({
                type: `PUSH_HISTORY`,
                payload: {
                    oldBase: base,
                    oldAmount: amount,
                    newBase,
                    newAmount,
                    date
                },
            });
            dispatch(getRates(newBase));
        };

export default exchange;