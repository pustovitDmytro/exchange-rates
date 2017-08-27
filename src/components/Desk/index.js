/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import s from './Desk.scss';
import { connect } from 'react-redux';
import CurrencyTable from '../СurrencyTable';
import RatesBar from '../RatesBar';
import HistoryBar from '../HistoryBar';
import Transactions from '../Transactions';
import Paper from 'material-ui/Paper';

const Desk = ({rates,current,history}) => (
    <div className={s.container}>
        <Paper zDepth={1} className={s.rates}>
            <RatesBar
                amount={current.amount}
                base={current.base}/>
            <CurrencyTable rates={rates.array}/>
        </Paper>
        <Paper zDepth={1} className={s.transactions}>
            <HistoryBar date={rates.date}/>
            <Paper zDepth={3}>
            <Transactions
                date={rates.date}
                history={history}/>
                </Paper>
        </Paper>
    </div>
);
function mapStateToProps (state) {
    return {
        rates: state.rates,
        current: state.current,
        history: state.history,
    }
}
export default connect(mapStateToProps)(Desk);