/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import {searchRates} from '../../actions/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import unknown from './unknown.png';
import Find from '../Find';

const Panel = ({amount,base,src,user}) => (
    <Toolbar>
        <ToolbarGroup>
            <Avatar src={src||unknown} />
            <ToolbarTitle text={`User, ${base}`} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
            <Find
                hint="currency name"
                placeholder="Search"
                searchFunc={searchRates}/>
        </ToolbarGroup>
    </Toolbar>
);

export default connect()(Panel);