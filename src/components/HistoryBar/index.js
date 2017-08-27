/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import {searchHistory} from '../../actions/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Find from '../Find';

const Panel = ({date}) => (
    <Toolbar>
        <ToolbarGroup >
            <ToolbarTitle text={`Today is ${date}`}/>
        </ToolbarGroup>
        <ToolbarGroup>
            <Find
                hint="currency name"
                placeholder="Search"
                searchFunc={searchHistory}/>
        </ToolbarGroup>
    </Toolbar>
);

export default connect()(Panel);