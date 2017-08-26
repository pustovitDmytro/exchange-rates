/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import exchange from '../../actions/exchange';
import { connect } from 'react-redux';

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
                    <TableHeaderColumn>#</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Value</TableHeaderColumn>
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
                            <TableRowColumn>{i+1}</TableRowColumn>
                            <TableRowColumn>{name}</TableRowColumn>
                            <TableRowColumn>{value}</TableRowColumn>
                            <TableRowColumn>
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