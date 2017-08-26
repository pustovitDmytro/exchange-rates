/**
 * Created by pusti on 06.08.2017.
 */
import React from 'react';
import Desk from './Desk';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    getChildContext() {
        return {
            rates : this.props.store.getState().rates,
            current : this.props.store.getState().current,
            history : this.props.store.getState().history
        };
    }
    render() {
        return (
            <MuiThemeProvider>
                <Desk/>
            </MuiThemeProvider>
        );
    }
}
App.childContextTypes = {
    rates: PropTypes.object,
    current: PropTypes.object,
    history: PropTypes.object
};
export default App;