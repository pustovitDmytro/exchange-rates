/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {searchHistory} from '../../actions/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Find from '../Find';

const Panel = ({date}) => (
    <Toolbar>
        <ToolbarGroup firstChild={true}>
            <ToolbarTitle text={date}/>
        </ToolbarGroup>
        <ToolbarGroup>
            <Find
                hint="Input Currency name"
                placeholder="Search in history"
                searchFunc={searchHistory}/>
        </ToolbarGroup>
    </Toolbar>
);

export default connect()(Panel);