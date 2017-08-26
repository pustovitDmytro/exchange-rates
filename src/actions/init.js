/**
 * Created by pusti on 26.08.2017.
 */
const init = (amount,base) => dispatch => {
    dispatch({
        type: `INIT_CURRENCY`,
        payload: {amount,base},
    });
    dispatch({
        type: `INIT_HISTORY`,
        payload: {},
    });
}

export default init;