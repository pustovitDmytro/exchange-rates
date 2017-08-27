/**
 * Created by pusti on 26.08.2017.
 */
import {HOC} from 'formsy-react';
import React from 'react';
import TextField from 'material-ui/TextField';
import {red800, green900} from 'material-ui/styles/colors';
const styles = {
    valid: {
        color: green900,
    },
    invalid: {
        color: red800,
    }
};
class SimpleInput extends React.Component {
    constructor(props){
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue(event) {
        this.props.setValue(event.currentTarget.value);
    }
    render() {
        const {type,getValue,placeholder,isValid,name,hint} = this.props;
        return (
            <TextField
                floatingLabelFocusStyle={styles[isValid()?'valid':'invalid']}
                hintText={hint}
                type="text"
                floatingLabelText={placeholder}
                name={name}
                fullWidth={true}
                value={getValue()||''}
                onChange={this.changeValue}/>
        )
    };
}
export default HOC(SimpleInput);