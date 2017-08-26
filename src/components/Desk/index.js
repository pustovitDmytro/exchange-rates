/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import s from './Desk.scss';
import { connect } from 'react-redux';
import CurrencyTable from '../СurrencyTable';
import RatesBar from '../RatesBar';
import HistoryBar from '../HistoryBar';
import Transactions from '../Transactions';

const Desk = ({rates,current,history}) => (
    <div>
    <div className={s.container}>
        <RatesBar
            amount={current.amount}
            base={current.base}/>
        <CurrencyTable rates={rates.array}/>
    </div>
        <HistoryBar date={rates.date}/>
        <Transactions
            date={rates.date}
            history={history}/>
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