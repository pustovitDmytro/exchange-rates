/**
 * Created by pusti on 26.08.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Short, Long} from './Items';

const Transactions = ({date,history,dispatch}) => (
    <List>
        <Subheader>Trading history</Subheader>
        {
            history.array.map(({date, oldBase,oldAmount,newBase,newAmount},i)=>
                <ListItem
                    key={i}
                    initiallyOpen={false}
                    primaryText ={<Short oldBase={oldBase} newBase={newBase}/>}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            key={0}
                            primaryText ={
                                <Long date={date} oldBase={oldBase} newBase={newBase} oldAmount={oldAmount} newAmount={newAmount}/>
                            }>
                        </ListItem>
                    ]}
                />
            )
        }
    </List>
);
export default connect()(Transactions);