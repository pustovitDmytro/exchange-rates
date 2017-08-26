/**
 * Created by pusti on 26.08.2017.
 */
import {HOC} from 'formsy-react';
import React from 'react';
import TextField from 'material-ui/TextField';

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
                hintText={hint}
                floatingLabelText={placeholder}
                name={name}
                value={getValue()}
                onChange={this.changeValue}/>
        )
    };
}
export default HOC(SimpleInput);