/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import {searchRates} from '../../actions/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Find from '../Find';

const Panel = ({amount,base}) => (
    <Toolbar>
        <ToolbarGroup firstChild={true}>
            <ToolbarTitle text="Hello, User" />
            <ToolbarSeparator />
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolbarTitle text={amount}/>
            <ToolbarTitle text={base} />
        </ToolbarGroup>
        <ToolbarGroup>
            <Find
                hint="Input Currency name"
                placeholder="Search currency"
                searchFunc={searchRates}/>
        </ToolbarGroup>
    </Toolbar>
);

export default connect()(Panel);