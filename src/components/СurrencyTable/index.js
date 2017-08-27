/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import exchange from '../../actions/exchange';
import { connect } from 'react-redux';
import s from './CurrencyTable.scss';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const change = (dispatch , newBase, value) => () => dispatch(exchange(newBase, value));
const Currency = ({rates,base,dispatch}) => (
        <Table
            fixedHeader={true}
            selectable={false}>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn className={s.hidemobile}>#</TableHeaderColumn>
                    <TableHeaderColumn style={{padding:5}}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={{padding:5}}>Value</TableHeaderColumn>
                    <TableHeaderColumn/>
                </TableRow>
            </TableHeader>
            <TableBody
                showRowHover={true}
                displayRowCheckbox={false}
                stripedRows={true}>
                {
                    rates.map(({name,value},i) =>
                        <TableRow key={i}>
                            <TableRowColumn className={s.hidemobile}>{i+1}</TableRowColumn>
                            <TableRowColumn style={{padding:5}}>{name}</TableRowColumn>
                            <TableRowColumn style={{padding:5}}>{value}</TableRowColumn>
                            <TableRowColumn style={{padding:5}}>
                                <RaisedButton
                                    onClick={change(dispatch,name,value)}
                                    label="Change"
                                    primary={true}/>
                            </TableRowColumn>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
);
export default connect()(Currency);